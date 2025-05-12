import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from mood_analyzer import analyze_mood
from sqlalchemy.orm import Session

app = Flask(__name__)
os.environ['SQLALCHEMY_WARN_20'] = '1'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)
CORS(app)

if not os.path.exists('users.db'):
    with app.app_context():
        db.create_all()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Added autoincrement
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

User.text_histories = db.relationship('TextHistory', backref='user', lazy=True)

class TextHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    analysis_result = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp(), nullable=False)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'success': True, 'user_id': user.id})
    return jsonify({'success': False})

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({'success': False, 'message': 'Email already exists'})

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'success': True})

@app.route('/api/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    user_id = data.get('user_id')
    text = data.get('text')

    if not user_id or not text:
        return jsonify({'success': False, 'message': 'Missing user_id or text'}), 400

    mood = analyze_mood(text)

    new_history = TextHistory(user_id=user_id, text=text, analysis_result=mood)
    db.session.add(new_history)
    db.session.commit()

    return jsonify({'success': True, 'analysis_result': mood})


@app.route('/api/history/<int:user_id>', methods=['GET'])
def get_user_history(user_id):
    with db.session() as session:
        user = session.get(User, user_id)
        if not user:
            return jsonify({'success': False, 'message': 'User not found'}), 404

        history = session.query(TextHistory).filter_by(user_id=user_id).order_by(TextHistory.timestamp.desc()).all()
        history_data = [
            {
                'text': entry.text,
                'analysis_result': entry.analysis_result,
                'timestamp': entry.timestamp
            } for entry in history
        ]

        return jsonify({'success': True, 'history': history_data})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=10000, debug=True)

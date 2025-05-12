import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Mood Scanner</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/chat">Chat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/history">History</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
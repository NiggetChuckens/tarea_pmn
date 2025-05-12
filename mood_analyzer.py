from textblob import TextBlob

def analyze_mood(text):
    """
    Analyzes the mood of the given text using TextBlob.

    Args:
        text (str): The text to analyze.

    Returns:
        str: The mood of the text (e.g., 'positive', 'neutral', 'negative').
    """
    analysis = TextBlob(text)
    polarity = analysis.sentiment.polarity

    if polarity > 0:
        return "positive"
    elif polarity == 0:
        return "neutral"
    else:
        return "negative"
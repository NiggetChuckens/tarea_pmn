"use client";

import { useState } from "react";
import Sentiment from "sentiment";

export default function SentimentAnalysisPanel() {
  const [inputText, setInputText] = useState("");
  const [mood, setMood] = useState("");

  const sentiment = new Sentiment();

  const analyzeMood = (text) => {
    const result = sentiment.analyze(text);
    if (result.score > 0) {
      setMood("Positive");
    } else if (result.score < 0) {
      setMood("Negative");
    } else {
      setMood("Neutral");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    analyzeMood(value);
  };

  return (
    <div className="container">
      <h2>Mood analyzer</h2>
      <textarea
        className="form-control"
        rows="5"
        value={inputText}
        onChange={handleChange}
      ></textarea>
      <div className="mt-3">
        <h4>Mood: {mood}</h4>
      </div>
    </div>
  );
};
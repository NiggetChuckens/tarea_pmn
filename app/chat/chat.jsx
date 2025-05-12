"use client";

import { useEffect, useState } from "react";
import { fetchChatData } from "./apiHandler";
import { getUserId } from "../auth/auth";

export default function ChatPage() {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [mood, setMood] = useState(null);
  
  useEffect(() => {
    const userId = getUserId(); // Retrieve userId from localStorage

    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const getChatData = async () => {
      try {
        const data = await fetchChatData(userId);
        setChatData(data);
      } catch (err) {
        setError("Failed to fetch chat data.");
      } finally {
        setLoading(false);
      }
    };

    getChatData();
  }, []);

  const analyzeMood = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: getUserId(), text }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze mood.");
      }

      const result = await response.json();
      setMood(result.analysis_result);
    } catch (err) {
      setError("Failed to analyze mood.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Chat</h1>
      <div className="mb-4">
        <textarea
          className="form-control mb-2"
          placeholder="Enter text to analyze mood"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={analyzeMood}>
          Analyze Mood
        </button>
        {mood && <p className="mt-3">Mood: {mood}</p>}
      </div>
    </div>
  );
}
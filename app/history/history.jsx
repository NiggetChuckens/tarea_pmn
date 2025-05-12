"use client";

import { useEffect, useState } from "react";
import { fetchHistory } from "./apiHandler";
import { getUserId } from "../auth/auth";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = getUserId(); 

    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const getHistory = async () => {
      try {
        const data = await fetchHistory(userId);
        setHistory(data.history); 
      } catch (err) {
        setError("Failed to fetch history.");
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, []);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger text-center mt-5">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">History</h1>
      {history.length > 0 ? (
        <ul className="list-group">
          {history.map((item, index) => (
            <li key={index} className="list-group-item">
              <p><strong>Text:</strong> {item.text}</p>
              <p><strong>Analysis Result:</strong> {item.analysis_result}</p>
              <p><strong>Timestamp:</strong> {new Date(item.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info text-center">No history available.</div>
      )}
    </div>
  );
}
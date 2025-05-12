import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendMessageToAPI = async (userId, text, analysisResult) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/analyze`, {
      user_id: userId,
      text,
      analysis_result: analysisResult,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message to API:', error);
    return { success: false, message: 'Failed to send message to API' };
  }
};

export const getUserHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/history/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user history from API:', error);
    return { success: false, message: 'Failed to fetch user history from API' };
  }
};

export const fetchChatData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/history/${userId}`);
    return response.data.history; // Assuming the API returns { success: true, history: [...] }
  } catch (error) {
    console.error('Error fetching chat data:', error);
    throw new Error('Failed to fetch chat data');
  }
};
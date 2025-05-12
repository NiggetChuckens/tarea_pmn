export async function fetchHistory(userId) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/history/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch history");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
}
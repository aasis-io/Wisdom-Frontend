import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

/* ------------------------------------------------------------------
   EVENT APIs
------------------------------------------------------------------- */

/**
 * Get the upcoming event
 * Expected response: { title, date, link, image }
 */
export const getUpcomingEvent = async () => {
  try {
    const response = await api.get("/getEvent"); // your backend endpoint
    return response.data;
  } catch (error) {
    console.error("Failed to fetch upcoming event:", error);
    throw error;
  }
};

/**
 * Register for an event
 * Sends fullName, email, phone to backend
 */
export const registerForEvent = async (data) => {
  try {
    const response = await api.post("/eventRegistration", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to register for event:", error);
    throw error;
  }
};

export default api;

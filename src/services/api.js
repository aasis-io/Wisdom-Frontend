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

/* ------------------------------------------------------------------
   HOME PAGE
------------------------------------------------------------------- */

export const getHomePage = async () => {
  const response = await api.get("/getHome");
  return response.data;
};

/* ------------------------------------------------------------------
   ABOUT PAGE
------------------------------------------------------------------- */

export const getAboutPage = async () => {
  const response = await api.get("/getAbout");
  return response.data;
};

/* ------------------------------------------------------------------
   TEAM MEMBERS
------------------------------------------------------------------- */

export const getTeamMembers = async () => {
  const response = await api.get("/getTeam");
  return response.data;
};

/* ------------------------------------------------------------------
   JOURNALS
------------------------------------------------------------------- */

export const getJournals = async () => {
  const response = await api.get("/getJournals");
  return response.data;
};

export const getJournalById = async (id) => {
  const response = await api.get(`/journal/${id}`);
  return response.data;
};

/* ------------------------------------------------------------------
   USEFUL LINKS
------------------------------------------------------------------- */

export const getUsefulLinks = async () => {
  const response = await api.get("/getLink");
  return response.data;
};

/* ------------------------------------------------------------------
   MEDIA IMAGES
------------------------------------------------------------------- */

export const getMediaImages = async () => {
  const response = await api.get("/getMediaImages");
  return response.data;
};

/* ------------------------------------------------------------------
   MEDIA VIDEOS
------------------------------------------------------------------- */

export const getMediaVideos = async () => {
  const response = await api.get("/getMediaVideos");
  return response.data;
};

/* ------------------------------------------------------------------
   SITE SETTINGS
------------------------------------------------------------------- */

export const getSiteSettings = async () => {
  const response = await api.get("/getSiteSettings");
  return response.data;
};

export default api;

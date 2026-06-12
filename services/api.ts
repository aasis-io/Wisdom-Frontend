import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

/* ------------------------------------------------------------------
   EVENT APIs
------------------------------------------------------------------- */
export const getUpcomingEvent = async () => {
  const response = await api.get("/getEvent");
  return response.data;
};

export const registerForEvent = async (data: { fullName: string; email: string; phone: string }) => {
  const response = await api.post("/eventRegistration", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const getAlert = async () => {
  const response = await api.get("/getNotices");
  return response.data;
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

/* -----------------------------------------------------------------
   TEAM MEMBERS
------------------------------------------------------------------ */
export const getTeamMembers = async () => {
  const response = await api.get("/getTeam");
  return response.data;
};

/* -----------------------------------------------------------------
   JOURNALS
------------------------------------------------------------------ */
export const getJournals = async () => {
  const response = await api.get("/getJournals");
  return response.data;
};

export const getJournalById = async (id: string | number) => {
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
   MEDIA
------------------------------------------------------------------- */
export const getMediaImages = async () => {
  const response = await api.get("/getMediaImages");
  return response.data;
};

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

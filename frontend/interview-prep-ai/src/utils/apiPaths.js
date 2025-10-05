export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", //SignUp
    LOGIN: "/api/auth/login", //Authenticate User and return jwt token
    GET_PROFILE: "/api/auth/profile", //Get logged-in user details
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", //Upload profile picture
  },

  AI: {
    GENERATE_QUESTIONS: "/api/ai/generate-questions", //Generate interview questions and answers using Gemini
    GENERATE_EXPLANATION: "/api/ai/generate-explanation", // Generate concept explanation using Gemini
  },

  SESSION: {
    CREATE: "/api/sessions/create", //Create a new interview session with question
    GET_ALL: "/api/sessions/my-sessions", //Get all users session
    GET_ONE: (id) => `/api/sessions/${id}`, //Get sessions details with question
    DELETE: (id) => `/api/sessions/${id}`, //Delete a session
  },

  QUESTION: {
    ADD_TO_SESSION: "/api/questions/add", //Add more questions to a session
    PIN: (id) => `/api/questions/${id}/pin`, //Pin or Unpin a question
    UPDATE_NOTE: (id) => `/api/questions/${id}/note`, //update/add a note to a question
  },
};

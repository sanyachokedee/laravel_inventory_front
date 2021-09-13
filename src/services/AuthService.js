import axios from "axios";

const authService = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  // baseURL: "http://localhost:8000/api/",
  // baseURL: "https://7639-184-22-83-152.jp.ngrok.io/api/",
  withCredential: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;
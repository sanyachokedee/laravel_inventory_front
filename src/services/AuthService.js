import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:8000/api/",
  // baseURL: "https://7639-184-22-83-152.jp.ngrok.io/api/",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;
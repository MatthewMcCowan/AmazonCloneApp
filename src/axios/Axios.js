import axios from "axios";

const instance = axios.create({
  //url of our api
  baseURL: "http://localhost:5001/clone-app-bf2ed/us-central1/api",
});

export default instance;

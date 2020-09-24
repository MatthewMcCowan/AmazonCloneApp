import axios from "axios";

const instance = axios.create({
  //url of our api
  baseURL: "https://us-central1-clone-app-bf2ed.cloudfunctions.net/api",
  //"http://localhost:5001/clone-app-bf2ed/us-central1/api",
});

export default instance;

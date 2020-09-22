import axios from "axios";

const instance = axios.create({
  //url of our api
  baseURL: "",
});

export default instance;

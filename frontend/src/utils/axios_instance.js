import axios from "axios";

const axios_create = axios.create({
  baseURL: "https://thankful-pocketbook-crab.cyclic.app",
  // baseURL:'http://localhost:5000'
});

export default axios_create;

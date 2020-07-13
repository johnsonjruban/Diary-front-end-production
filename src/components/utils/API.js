import axios from "axios";
export default axios.create({
  baseURL: "http://ec2-3-134-253-25.us-east-2.compute.amazonaws.com/api/",
  responseType: "json",
  headers: {}
});

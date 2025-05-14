import axios from "axios";
let serverUrl = 'http://localhost:4000'
class WebService {
  static getApi(url, data) {
    console.log("jeroigdofkv",url)
    return axios.get(`http://localhost:4000${url}`, data);
  }
  static postApi(url, data) {
    return axios.post(url, data);
  }
}
export default WebService;

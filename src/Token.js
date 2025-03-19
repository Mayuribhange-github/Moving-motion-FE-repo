import axios from "axios";
import { useSelector } from "react-redux";

export default function Token() {
  const axiosApiInstance = axios.create();
  const { token } = useSelector((state) => state.user.value);
  console.log("interceptor called.......................");
  axiosApiInstance.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = "" + token;
      return config;
    },
    function (error) {
      console.log("error.......................");
      return Promise.reject(error);
    }
  );
}

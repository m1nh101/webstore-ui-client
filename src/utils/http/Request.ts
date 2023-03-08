import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

interface AxiosConfig extends AxiosRequestConfig {
  mode?: string;
}

const Request: AxiosInstance = axios.create({
  baseURL: `https://localhost:/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  timeout: 5000,
} as AxiosConfig);

Request.interceptors.request.use(
  (configs: InternalAxiosRequestConfig) => {
    return configs;
  },
  (error: AxiosError) => {
    if (error?.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

Request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error?.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default Request;

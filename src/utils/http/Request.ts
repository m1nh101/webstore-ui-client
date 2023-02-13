import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const AuthService = axios.create({
  baseURL: `https://localhost:7236/api`,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
});

AuthService.interceptors.request.use(
  (configs: InternalAxiosRequestConfig) => {
    return configs;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

AuthService.interceptors.response.use(
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

export default AuthService;

import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
const AuthService = axios.create({
  baseURL: `https://localhost:/api`,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
});

AuthService.interceptors.request.use(
  (configs: InternalAxiosRequestConfig) => {
    configs.headers["Content-Type"] = "application/json";
    return configs;
  },
  (error) => {
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

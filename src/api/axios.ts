import { API_HOST } from "@/constants";
import { authService } from "@/services/auth/authService.model";
import axios from "axios";
import { SignInResponseDto } from "./shared";

const { $accessToken, $refreshToken } = authService.outputs;

export const axiosInstance = axios.create({
  baseURL: API_HOST,
});

axiosInstance.interceptors.request.use((req) => {
  req.headers.setAuthorization(`Bearer ${$accessToken.getState()}`);

  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    res = res.data;

    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    const isUnauthorized =
      error.response.status === 401 && error.config && !error.config._isRetry;

    if (isUnauthorized) {
      originalRequest._isRetry = true;

      try {
        const refresh = $refreshToken.getState();

        const tokens: SignInResponseDto = await axiosInstance.post(
          "/auth/refresh",
          { refresh: refresh }
        );

        authService.inputs.tokenReceived(tokens);

        return axiosInstance.request(originalRequest);
      } catch (e) {
        authService.inputs.signOut();
      }
    }
    throw error;
  }
);

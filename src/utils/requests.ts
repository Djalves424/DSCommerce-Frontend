import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import { history } from "./history";
import * as authService from '../services/auth-service';

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: "Bearer" + authService.getAccessToken()
        }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers })
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
        // DO SOMETHING BEFORE REQUEST IS SENT
        return config;
    },
    function (error) {
        // DO SOMETHING WITH REQUEST ERROR
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
        // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            history.push("/login");
        }
        if (error.response.status === 403) {
            history.push("/catolog");
        }
        return Promise.reject(error);
    }
);
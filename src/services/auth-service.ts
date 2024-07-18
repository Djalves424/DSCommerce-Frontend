import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from '../localstorage/access-token-repository';
import jwtDecode from "jwt-decode";

export function loginResquest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    };

    const requestBody = QueryString.stringify({
        ...loginData,
        grant_type: "password",
    });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers,
    };

    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenRepository.get();
        return token == null ? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    const tokenPayload = getAccessTokenPayload();
    if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true;
    }
    return false;
}
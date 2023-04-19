// Setting up API environment variables

export const HOST_URL = "http://127.0.0.1:80";

export const PROJECT_ID = "6425c669a2eabc2b81c0";

export const API_VERSION = "/v1";

export const BASE_PATH = `${API_VERSION}/account`;

export const CREATE_ACCOUNT_URL = `${HOST_URL}${BASE_PATH}`;

// Create Account Login Session
export const LOGIN_SESSION_URL = `${HOST_URL}${BASE_PATH}/sessions/email`;

// Close Account Login Session
export const LOGOUT_SESSION_URL = `${HOST_URL}${BASE_PATH}/sessions`;

//Create Account JWT Token
export const JWT_TOKEN_URL = `${HOST_URL}${BASE_PATH}/jwt`;

// Setting up API environment variables

export const PROJECT_ID = "643fd636d5b12f836b45";

export const HOST_URL = "http://127.0.0.1:80";

export const API_VERSION = "/v1";

export const ACCOUNT_ROUTE = "/account";

export const BASE_PATH = `${API_VERSION}${ACCOUNT_ROUTE}`;

export const CREATE_ACCOUNT_URL = `${HOST_URL}${BASE_PATH}`;

// Create Account Login Session
export const LOGIN_SESSION_URL = `${HOST_URL}${BASE_PATH}/sessions/email`;

// Close Account Login Session
export const LOGOUT_SESSION_URL = `${HOST_URL}${BASE_PATH}/sessions`;

//Create Account JWT Token
export const JWT_TOKEN_URL = `${HOST_URL}${BASE_PATH}/jwt`;

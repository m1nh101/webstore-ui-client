import Cookies from "js-cookie";

const TokenKey = "token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(payload: any) {
  return Cookies.set(TokenKey, payload);
}
export function removeToken() {
  return Cookies.remove(TokenKey);
}

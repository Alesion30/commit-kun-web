import { setCookie, parseCookies, destroyCookie } from "nookies";

/** Cookieを取得（Client-Only） */
export const getCookieClient = (key: string) => {
  const cookies = parseCookies();
  return key in cookies ? cookies[key] : null;
};

/** Cookieをセット（Client-Only） */
export const setCookieClient = (key: string, value: string) => {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60, // 30日間
    path: "/",
  });
};

/** Cookieを削除（Client-Only） */
export const removeCookieClient = (key: string) => destroyCookie(null, key);

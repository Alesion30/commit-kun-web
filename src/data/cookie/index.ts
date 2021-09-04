import {
  getCookieClient,
  setCookieClient,
  removeCookieClient,
} from "~/plugins/nookies";

/**
 * GitHubAPIのトークン
 */
const GITHUB_TOKEN_KEY = "githubToken";

/** GitHubAPIのトークンをCookieから取得 */
export const getGitHubToken = () => getCookieClient(GITHUB_TOKEN_KEY);

/** GitHubAPIのトークンをCookieにセット */
export const setGitHubToken = (value: string) =>
  setCookieClient(GITHUB_TOKEN_KEY, value);

/** GitHubAPIのトークンをCookieから削除 */
export const removeGitHubToken = () => removeCookieClient(GITHUB_TOKEN_KEY);

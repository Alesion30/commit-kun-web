import axios from "~/plugins/axios";

export type UserResponse = {
  userUid: string;
  userName: string;
  email: string;
  imageUrl: string;
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type CreateUserRequest = {
  userName: string;
  email: string;
  imageUrl: string;
  accessToken: string; // GitHubAPIトークン
};

/** ユーザー情報取得 */
export const getUser = (token: string) =>
  axios(token).get<UserResponse>("/user");

/** ユーザー登録 */
export const createUser = (req: CreateUserRequest, token: string) =>
  axios(token).post<void>("/user", req);

/** ユーザー情報更新 */
export const updateUser = (req: CreateUserRequest, token: string) =>
  axios(token).patch<void>("/user", req);

/** GitHubの情報（コミット数・PRレビューコメント数）をDBに反映 */
export const fetchGitHubInfo = (token: string) =>
  axios(token).get<void>("/user/git", {
    params: { timeDifference: 9 },
  });

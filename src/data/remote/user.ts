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

export type UserBasicResponse = {
  rank: number;
  level: number;
  experiencePoint: number;
  workTime: number;
  typeNum: number;
  commit: number;
  prComment: number;
};

export type UserLevelResponse = {
  todayLevel: {
    experiencePoint: number;
    level: number;
  };
  yesterdayLevel: {
    experiencePoint: number;
    level: number;
  };
};

/** ユーザー情報取得 */
export const getUser = (token: string) =>
  axios(token).get<UserResponse>("/user");

/** ユーザーの基本情報を取得 */
export const getUserBasicInfo = (token: string) =>
  axios(token).get<UserBasicResponse>("/user/basic");

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

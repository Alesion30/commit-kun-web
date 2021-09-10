import axios from "~/plugins/axios";

export type RankingsResponse = Ranking[];

export type Ranking = {
  level: number;
  experiencePoint: number;
  user: {
    userUid: string;
    userName: string;
    email: string;
    imageUrl: string;
  };
};

/** ランキングを取得 */
export const getRankings = (token: string, page: number) =>
  axios(token).get<RankingsResponse>("/rank", {
    params: {
      page: page,
      pageSize: 10,
    },
  });

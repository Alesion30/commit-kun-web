import axios from "~/plugins/axios";

export type Mission = {
  mission: string;
  missionType: string;
  clearRate: number;
  experiencePoint: number; // 経験値
};

export type MissionResponse = Mission[];

/** デイリーミッションを取得 */
export const getDailyMission = (token: string) =>
  axios(token).get<MissionResponse>("/user/mission/daily");

/** ノーマルミッションを取得 */
export const getNormalMission = (token: string) =>
  axios(token).get<MissionResponse>("/user/mission/normal");

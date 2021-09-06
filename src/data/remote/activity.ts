import axios from "~/plugins/axios";

export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

export type WorkTimeResponse = {
  workTime: number;
  hours: {
    hour: Hour;
    workTime: number;
  }[];
};

/** 1日の作業時間を取得 */
export const getWorkTime = (token: string) =>
  axios(token).get<WorkTimeResponse>("/user/hours/work", {
    params: { timeDifference: 9 },
  });

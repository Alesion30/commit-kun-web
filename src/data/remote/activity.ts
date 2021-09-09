import axios from "~/plugins/axios";
import { Dayjs } from "~/plugins/dayjs";

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

// ****************************************************************
// 作業ログを取得
// ****************************************************************

export type ActivityData = {
  todayData: number;
  yesterdayData: number;
};

export type ActivityLogResponse = {
  level: ActivityData;
  experiencePoint: ActivityData;
  workTime: ActivityData;
  typeNum: ActivityData;
  commit: ActivityData;
  prComment: ActivityData;
};

/** 作業記録を取得 */
export const getActivityLog = (token: string, date: Dayjs) =>
  axios(token).get<ActivityLogResponse>("/user/active-log", {
    params: {
      timeDifference: 9,
      // date: date.startOf("d").format("YYYY-MM-DDTHH:mm:ss"),
    },
  });

// ****************************************************************
// 作業時間
// ****************************************************************

export type WorkTimeResponse = {
  workTime: number;
  hours: {
    hour: Hour;
    workTime: number;
  }[];
};

/** 1日の作業時間を取得 */
export const getWorkTime = (token: string, date: Dayjs) =>
  axios(token).get<WorkTimeResponse>("/user/hours/work", {
    params: {
      timeDifference: 9,
      date: date.startOf("d").format("YYYY-MM-DDTHH:mm:ss"),
    },
  });

// ****************************************************************
// コミット数
// ****************************************************************

export type CommitResponse = {
  commitNum: number;
  hours: {
    hour: Hour;
    commit: number;
  }[];
};

/** 1日のコミット数を取得 */
export const getCommit = (token: string, date: Dayjs) =>
  axios(token).get<CommitResponse>("/user/hours/commit", {
    params: {
      timeDifference: 9,
      date: date.startOf("d").format("YYYY-MM-DDTHH:mm:ss"),
    },
  });

// ****************************************************************
// コード量
// ****************************************************************

export type TypeNumResponse = {
  typeNum: number;
  hours: {
    hour: Hour;
    typeNum: number;
  }[];
};

/** 1日のコード量を取得 */
export const getTypeNum = (token: string, date: Dayjs) =>
  axios(token).get<TypeNumResponse>("/user/hours/type", {
    params: {
      timeDifference: 9,
      date: date.startOf("d").format("YYYY-MM-DDTHH:mm:ss"),
    },
  });

// ****************************************************************
// PRコメント数
// ****************************************************************

export type PrCommentResponse = {
  prCommentNum: number;
  hours: {
    hour: Hour;
    prComment: number;
  }[];
};

/** 1日のPRコメント数を取得 */
export const getPrComment = (token: string, date: Dayjs) =>
  axios(token).get<PrCommentResponse>("/user/hours/pr", {
    params: {
      timeDifference: 9,
      date: date.startOf("d").format("YYYY-MM-DDTHH:mm:ss"),
    },
  });

// ****************************************************************
// 対象年月の日毎の経験値を取得
// ****************************************************************

export type ExpResponse = {
  date: Date;
  experiencePoint: number; // 獲得経験値
}[];

/** 対象年月の日毎の経験値を取得 */
export const getDailyExps = (token: string, start: Dayjs, end: Dayjs) => {
  return axios(token).get<ExpResponse>("/user/exp/days", {
    params: {
      timeDifference: 9,
      start: start.format("YYYY-MM-DDTHH:mm:ss"),
      end: end.format("YYYY-MM-DDTHH:mm:ss"),
    },
  });
};

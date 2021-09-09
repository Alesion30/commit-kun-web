import { createContext } from "react";
import { ActivityLogResponse, ExpResponse } from "~/data/remote/activity";
import { Dayjs } from "~/plugins/dayjs";

export type ActivityContextProps = {
  isLoading: boolean;
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  startMonthDate: Dayjs;
  onClickPrevMonth: () => void;
  onClickNextMonth: () => void;
  activityLog: ActivityLogResponse;
  getDailyWorkTime: (date: Dayjs) => Promise<number[]>;
  getDailyCommit: (date: Dayjs) => Promise<number[]>;
  getDailyTypeNum: (date: Dayjs) => Promise<number[]>;
  getDailyPrComment: (date: Dayjs) => Promise<number[]>;
  exps: ExpResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  isLoading: false,
  date: null,
  setDate: () => {},
  startMonthDate: null,
  onClickPrevMonth: () => {},
  onClickNextMonth: () => {},
  getDailyWorkTime: null,
  getDailyCommit: null,
  getDailyTypeNum: null,
  getDailyPrComment: null,
  activityLog: null,
  exps: [],
});

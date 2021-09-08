import { createContext } from "react";
import {
  CommitResponse,
  ExpResponse,
  PrCommentResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";
import { Dayjs } from "~/plugins/dayjs";

export type ActivityContextProps = {
  isLoading: boolean;
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  startMonthDate: Dayjs;
  onClickPrevMonth: () => void;
  onClickNextMonth: () => void;
  workTime: WorkTimeResponse;
  commit: CommitResponse;
  typeNum: TypeNumResponse;
  prComment: PrCommentResponse;
  exps: ExpResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  isLoading: false,
  date: null,
  setDate: () => {},
  startMonthDate: null,
  onClickPrevMonth: () => {},
  onClickNextMonth: () => {},
  workTime: null,
  commit: null,
  typeNum: null,
  prComment: null,
  exps: [],
});

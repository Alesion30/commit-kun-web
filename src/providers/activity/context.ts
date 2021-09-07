import { createContext } from "react";
import {
  CommitResponse,
  PrCommentResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";

export type ActivityContextProps = {
  workTime: WorkTimeResponse;
  commit: CommitResponse;
  typeNum: TypeNumResponse;
  prComment: PrCommentResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  workTime: null,
  commit: null,
  typeNum: null,
  prComment: null,
});

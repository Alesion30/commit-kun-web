import { createContext } from "react";
import {
  CommitResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";

export type ActivityContextProps = {
  workTime: WorkTimeResponse;
  commit: CommitResponse;
  typeNum: TypeNumResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  workTime: null,
  commit: null,
  typeNum: null,
});

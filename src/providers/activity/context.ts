import { createContext } from "react";
import { CommitResponse, WorkTimeResponse } from "~/data/remote/activity";

export type ActivityContextProps = {
  workTime: WorkTimeResponse;
  commit: CommitResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  workTime: null,
  commit: null,
});

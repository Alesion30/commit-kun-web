import { createContext } from "react";
import { WorkTimeResponse } from "~/data/remote/activity";

export type ActivityContextProps = {
  workTime: WorkTimeResponse;
};

export const ActivityContext = createContext<ActivityContextProps>({
  workTime: null,
});

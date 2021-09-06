import { ReactNode, VFC, useEffect, useState } from "react";
import { ActivityContext } from "./context";
import { useAuth } from "~/hooks";
import {
  CommitResponse,
  getCommit,
  getWorkTime,
  WorkTimeResponse,
} from "~/data/remote/activity";

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityProvider: VFC<ActivityProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [workTime, setWorkTime] = useState<WorkTimeResponse>(null);
  const [commit, setCommit] = useState<CommitResponse>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (token) {
        // 作業時間
        const workTime = (await getWorkTime(token)).data;
        setWorkTime(workTime);

        // コミット数
        const commit = (await getCommit(token)).data;
        setCommit(commit);
      }
    };
    init();
  }, [token]);

  return (
    <ActivityContext.Provider
      value={{
        workTime,
        commit,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

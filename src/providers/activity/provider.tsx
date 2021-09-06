import { ReactNode, VFC, useEffect, useState } from "react";
import { ActivityContext } from "./context";
import { useAuth } from "~/hooks";
import { getWorkTime, WorkTimeResponse } from "~/data/remote/activity";

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityProvider: VFC<ActivityProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [workTime, setWorkTime] = useState<WorkTimeResponse>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (token) {
        // 作業時間
        const workTime = (await getWorkTime(token)).data;
        setWorkTime(workTime);
      }
    };
    init();
  }, [token]);

  return (
    <ActivityContext.Provider
      value={{
        workTime,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

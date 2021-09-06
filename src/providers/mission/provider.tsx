import { ReactNode, VFC, useEffect, useState } from "react";
import { MissionContext } from "./context";
import {
  getDailyMission,
  getNormalMission,
  MissionResponse,
} from "~/data/remote/mission";
import { useAuth } from "~/hooks";

type MissionProviderProps = {
  children: ReactNode;
};

export const MissionProvider: VFC<MissionProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [dailyMissions, setDailyMissions] = useState<MissionResponse[]>([]);
  const [normalMissions, setNormalMissions] = useState<MissionResponse[]>([]);

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (token) {
        // デイリーミッション
        const dailyMissions = (await getDailyMission(token)).data;
        setDailyMissions(dailyMissions);

        // ノーマルミッション取得
        const normalMissions = (await getNormalMission(token)).data;
        setNormalMissions(normalMissions);
      }
    };
    init();
  }, [token]);

  return (
    <MissionContext.Provider
      value={{
        daily: dailyMissions,
        normal: normalMissions,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

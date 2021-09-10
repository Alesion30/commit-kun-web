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

  const [normalMissionPage, setNormalMissionPage] = useState<number>(1);
  const nextNormalMissionPage = async () => {
    const newNormalMissions = (
      await getNormalMission(token, normalMissionPage + 1)
    ).data;
    const concatNormalMissions = normalMissions.concat(newNormalMissions);
    setNormalMissions(concatNormalMissions);
    setNormalMissionPage(normalMissionPage + 1); // ページ更新
  };

  const [dailyMissions, setDailyMissions] = useState<MissionResponse>([]);
  const [normalMissions, setNormalMissions] = useState<MissionResponse>([]);

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (token) {
        // デイリーミッション
        const dailyMissions = (await getDailyMission(token)).data;
        setDailyMissions(dailyMissions);

        // ノーマルミッション取得
        const normalMissions = (await getNormalMission(token, 1)).data;
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
        nextNormalMissionPage: nextNormalMissionPage,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

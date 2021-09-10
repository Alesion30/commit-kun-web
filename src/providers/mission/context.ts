import { createContext } from "react";
import { MissionResponse } from "~/data/remote/mission";

export type MissionContextProps = {
  daily: MissionResponse; // デイリーミッション
  normal: MissionResponse; // ノーマルミッション
  nextNormalMissionPage: () => Promise<void>;
};

export const MissionContext = createContext<MissionContextProps>({
  daily: [],
  normal: [],
  nextNormalMissionPage: null,
});

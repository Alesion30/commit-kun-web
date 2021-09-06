import { useContext } from "react";
import { MissionContext, MissionContextProps } from "~/providers/mission";

/** ミッション情報を管理 */
export default function useMission(): MissionContextProps {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error("useMission must be used within an MissionProvider");
  }
  return context;
}

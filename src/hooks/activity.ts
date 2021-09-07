import { useContext } from "react";
import { ActivityContext, ActivityContextProps } from "~/providers/activity";

/** アクティビティ情報を取得 */
export default function useActivity(): ActivityContextProps {
  const context = useContext(ActivityContext);
  if (context === undefined) {
    throw new Error("useActivity must be used within an ActivityProvider");
  }
  return context;
}

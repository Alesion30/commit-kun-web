import { useContext } from "react";
import { BasicContext, BasicContextProps } from "~/providers/basic";

/** ユーザーの基本情報を取得 */
export default function useBasic(): BasicContextProps {
  const context = useContext(BasicContext);
  if (context === undefined) {
    throw new Error("useBasic must be used within an BasicProvider");
  }
  return context;
}

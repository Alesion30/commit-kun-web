import { useContext } from "react";
import { LoadingContext, LoadingContextProps } from "~/providers/loading";

/** ローディング情報を管理 */
export default function useLoading(): LoadingContextProps {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return context;
}

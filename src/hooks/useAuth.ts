import { useContext } from "react";
import { AuthContext, AuthContextProps } from "~/providers/auth";

/** 認証情報を取得 */
export default function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

/** 認証状態を取得 */
export function useIsAuthenticated(): boolean {
  const context = useAuth();
  return context.isAuthenticated;
}

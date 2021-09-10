import { ReactNode, VFC, useEffect, useState } from "react";
import { fetchGitHubInfo, getUser } from "~/data/remote/user";
import { onAuthStateChanged } from "~/plugins/firebase";
import { AuthContext, AuthUser } from "./context";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [authUser, setAuthUser] = useState<AuthUser>(null);
  const [fbIdToken, setFbIdToken] = useState<string>(null);

  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      // ロードを開始
      setLoading(true);

      onAuthStateChanged(async (user) => {
        if (user != null) {
          // IDトークンをセット
          const idToken = await user.getIdToken();
          setFbIdToken(idToken);

          // バックエンド ユーザー情報
          const backendUser = (await getUser(idToken)).data;
          setAuthUser({
            uid: user.uid,
            userName: backendUser.userName,
            photoURL: user.photoURL,
          });

          // GitHubの情報をDBに反映
          fetchGitHubInfo(idToken);

          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }

        // ロードを終了
        setTimeout(() => setLoading(false), 1000);
      });
    };
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authUser,
        isLoading,
        fbIdToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

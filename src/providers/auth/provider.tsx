import { ReactNode, VFC, useEffect, useState } from "react";
import { getGitHubToken, removeGitHubToken } from "~/data/cookie";
import { User, onAuthStateChanged, signOut } from "~/plugins/firebase";
import { AuthContext } from "./context";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [authUser, setAuthUser] = useState<User>(null);
  const [githubToken, setGithubToken] = useState<String>(null);

  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      // ロードを開始
      setLoading(true);

      onAuthStateChanged((user) => {
        // 認証情報をセット
        setAuthUser(user);

        // 認証状態をセット
        if (user != null) {
          setAuthenticated(true);
          const token = getGitHubToken();
          console.log(token);
          setGithubToken(token);
        } else {
          setAuthenticated(false);
          removeGitHubToken();
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
        githubToken,
        setGithubToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

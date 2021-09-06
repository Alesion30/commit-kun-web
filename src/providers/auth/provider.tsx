import { ReactNode, VFC, useEffect, useState } from "react";
import { getGitHubToken, removeGitHubToken } from "~/data/cookie";
import { User, onAuthStateChanged } from "~/plugins/firebase";
import { AuthContext } from "./context";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [authUser, setAuthUser] = useState<User>(null);
  const [fbIdToken, setFbIdToken] = useState<string>(null);
  const [githubToken, setGithubToken] = useState<String>(null);

  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      // ロードを開始
      setLoading(true);

      onAuthStateChanged(async (user) => {
        // 認証情報をセット
        setAuthUser(user);

        if (user != null) {
          // IDトークンをセット
          const idToken = await user.getIdToken();
          setFbIdToken(idToken);
          console.log(idToken);

          // GitHubAPIのトークンをCookieから取得
          const token = getGitHubToken();
          setGithubToken(token);

          setAuthenticated(true);
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
        fbIdToken,
        githubToken,
        setGithubToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

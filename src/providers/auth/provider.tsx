import { ReactNode, VFC, useEffect, useState } from "react";
import {
  firebaseAuth,
  FirebaseUser,
  onAuthStateChanged,
} from "~/plugins/firebase";
import { AuthContext } from "./context";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [authUser, setAuthUser] = useState<FirebaseUser>(null);

  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      // ロードを開始
      setLoading(true);

      onAuthStateChanged(firebaseAuth, (user) => {
        // 認証情報をセット
        setAuthUser(user);

        // 認証状態をセット
        if (user != null) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }

        // ロードを終了
        setLoading(false);
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
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

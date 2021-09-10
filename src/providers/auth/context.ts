import { createContext } from "react";

export type AuthUser = {
  uid: string;
  userName: string;
  photoURL: string;
};

export type AuthContextProps = {
  isAuthenticated: boolean;
  authUser: AuthUser;
  isLoading: boolean;
  fbIdToken: string;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authUser: null,
  isLoading: true,
  fbIdToken: null,
});

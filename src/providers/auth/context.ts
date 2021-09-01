import { createContext } from "react";
import { User } from "~/plugins/firebase";

export type AuthContextProps = {
  isAuthenticated: boolean;
  authUser: User;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authUser: null,
  isLoading: true,
});

import { createContext, Dispatch, SetStateAction } from "react";
import { FirebaseUser } from "~/plugins/firebase";

export type AuthContextProps = {
  isAuthenticated: boolean;
  authUser: FirebaseUser;
  isLoading: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authUser: null,
  isLoading: true,
  setAuthenticated: () => {},
});

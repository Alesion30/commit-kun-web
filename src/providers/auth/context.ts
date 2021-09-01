import { createContext, Dispatch, SetStateAction } from "react";

export type AuthContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: () => {},
});

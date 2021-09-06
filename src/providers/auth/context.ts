import { createContext } from "react";
import { User } from "~/plugins/firebase";

export type AuthContextProps = {
  isAuthenticated: boolean;
  authUser: User;
  isLoading: boolean;
  fbIdToken: string;
  githubToken: String;
  setGithubToken: React.Dispatch<React.SetStateAction<String>>;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authUser: null,
  isLoading: true,
  fbIdToken: null,
  githubToken: null,
  setGithubToken: () => {},
});

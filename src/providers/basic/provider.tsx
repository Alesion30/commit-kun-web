import { ReactNode, VFC } from "react";
import { BasicContext } from "./context";

type BasicProviderProps = {
  children: ReactNode;
};

export const BasicProvider: VFC<BasicProviderProps> = ({ children }) => {
  return <BasicContext.Provider value={{}}>{children}</BasicContext.Provider>;
};

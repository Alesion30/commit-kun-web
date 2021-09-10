import { createContext } from "react";
import { UserBasicResponse } from "~/data/remote/user";

export type BasicContextProps = {
  basicInfo: UserBasicResponse;
};

export const BasicContext = createContext<BasicContextProps>({
  basicInfo: null,
});

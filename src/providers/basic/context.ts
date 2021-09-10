import { createContext } from "react";
import { UserBasicResponse } from "~/data/remote/user";

export type BasicContextProps = {
  basicInfo: UserBasicResponse;
  reload: () => Promise<void>;
};

export const BasicContext = createContext<BasicContextProps>({
  basicInfo: null,
  reload: null,
});

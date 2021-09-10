import { ReactNode, useCallback, useEffect, useState, VFC } from "react";
import { getUserBasicInfo, UserBasicResponse } from "~/data/remote/user";
import { useAuth } from "~/hooks";
import { BasicContext } from "./context";

type BasicProviderProps = {
  children: ReactNode;
};

export const BasicProvider: VFC<BasicProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [basicInfo, setBasicInfo] = useState<UserBasicResponse>(null);
  const reload = useCallback(async () => {
    if (token) {
      const data = (await getUserBasicInfo(token)).data;
      setBasicInfo(data);
    }
  }, [token]);

  return (
    <BasicContext.Provider value={{ basicInfo, reload }}>
      {children}
    </BasicContext.Provider>
  );
};

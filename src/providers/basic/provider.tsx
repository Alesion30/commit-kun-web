import { ReactNode, useEffect, useState, VFC } from "react";
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
  useEffect(() => {
    const init = async () => {
      if (token) {
        const data = (await getUserBasicInfo(token)).data;
        setBasicInfo(data);
      }
    };
    init();
  }, [token]);

  return (
    <BasicContext.Provider value={{ basicInfo }}>
      {children}
    </BasicContext.Provider>
  );
};

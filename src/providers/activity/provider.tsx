import { ReactNode, VFC, useEffect, useState } from "react";
import { ActivityContext } from "./context";
import { useAuth } from "~/hooks";
import {
  CommitResponse,
  getCommit,
  getPrComment,
  getTypeNum,
  getWorkTime,
  PrCommentResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityProvider: VFC<ActivityProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [workTime, setWorkTime] = useState<WorkTimeResponse>(null);
  const [commit, setCommit] = useState<CommitResponse>(null);
  const [typeNum, setTypeNum] = useState<TypeNumResponse>(null);
  const [prComment, setPrComment] = useState<PrCommentResponse>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (token) {
        // 作業時間
        const workTime = (await getWorkTime(token)).data;
        setWorkTime(workTime);

        // コミット数
        const commit = (await getCommit(token)).data;
        setCommit(commit);

        // コード量
        const typeNum = (await getTypeNum(token)).data;
        setTypeNum(typeNum);

        // PRレビューのコメント数
        const prComment = (await getPrComment(token)).data;
        setPrComment(prComment);
      }
    };
    init();
  }, [token]);

  return (
    <ActivityContext.Provider
      value={{
        workTime,
        commit,
        typeNum,
        prComment,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

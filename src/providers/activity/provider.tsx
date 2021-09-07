import { ReactNode, VFC, useEffect, useState, useCallback } from "react";
import { ActivityContext } from "./context";
import { useAuth } from "~/hooks";
import {
  CommitResponse,
  ExpResponse,
  getCommit,
  getDailyExps,
  getPrComment,
  getTypeNum,
  getWorkTime,
  PrCommentResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";
import dayjs, { Dayjs } from "~/plugins/dayjs";

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityProvider: VFC<ActivityProviderProps> = ({ children }) => {
  const auth = useAuth();
  const token = auth.fbIdToken;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Dayjs>(dayjs());

  // カレンダー年月
  const [startMonthDate, setStartMonthDate] = useState<Dayjs>(
    dayjs().startOf("M")
  );
  const onClickPrevMonth = () => {
    const prevMonthDate = startMonthDate.subtract(1, "M");
    setStartMonthDate(prevMonthDate);
  };
  const onClickNextMonth = () => {
    const nextMonthDate = startMonthDate.add(1, "M");
    setStartMonthDate(nextMonthDate);
  };

  const [workTime, setWorkTime] = useState<WorkTimeResponse>(null);
  const [commit, setCommit] = useState<CommitResponse>(null);
  const [typeNum, setTypeNum] = useState<TypeNumResponse>(null);
  const [prComment, setPrComment] = useState<PrCommentResponse>(null);

  // 経験値
  const [exps, setExps] = useState<ExpResponse>(null);

  // データ再取得
  const fetchData = useCallback(
    async (date: Dayjs) => {
      // ロード開始
      setIsLoading(true);

      // 初期化
      setWorkTime(null);
      setCommit(null);
      setTypeNum(null);
      setPrComment(null);

      if (token) {
        try {
          // 作業時間
          const workTime = (await getWorkTime(token, date)).data;

          // コミット数
          const commit = (await getCommit(token, date)).data;

          // コード量
          const typeNum = (await getTypeNum(token, date)).data;

          // PRレビューのコメント数
          const prComment = (await getPrComment(token, date)).data;

          // セット
          setWorkTime(workTime);
          setCommit(commit);
          setTypeNum(typeNum);
          setPrComment(prComment);
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error("requried firebase token");
      }

      // ロード終了
      setIsLoading(false);
    },
    [token]
  );

  useEffect(() => {
    fetchData(date);
  }, [fetchData, date]);

  // 月の経験値データを再取得
  const fetchExpsData = useCallback(
    async (year: number, month: number) => {
      setExps([]);

      if (token) {
        try {
          const exps = (await getDailyExps(token, year, month)).data;
          setExps(exps);
          console.log(exps);
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error("requried firebase token");
      }
    },
    [token]
  );

  useEffect(() => {
    fetchExpsData(startMonthDate.year(), startMonthDate.month());
  }, [fetchExpsData, startMonthDate]);

  return (
    <ActivityContext.Provider
      value={{
        isLoading,
        date,
        setDate,
        startMonthDate,
        onClickPrevMonth,
        onClickNextMonth,
        workTime,
        commit,
        typeNum,
        prComment,
        fetchData,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

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
  const [exps, setExps] = useState<ExpResponse>([]);

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
      if (token) {
        // TODO: 1ヶ月全てのデータを取るとサーバーが落ちるので、3日ごとで取得。修正必要あり
        try {
          let new_exps: ExpResponse = [];

          const startDate = dayjs().year(year).month(month).startOf("month");
          const endDate = dayjs().year(year).month(month).endOf("month");

          let date = startDate;
          let predate = startDate;

          const isExist =
            exps.find(
              (value) =>
                dayjs(value.date).year() === year &&
                dayjs(value.date).month() === month
            ) !== undefined;
          if (!isExist) {
            try {
              while (date < endDate && date <= dayjs()) {
                date = date.add(3, "d");
                const new_exps_part =
                  (await getDailyExps(token, predate, date)).data ?? [];
                new_exps = new_exps.concat(new_exps_part);
                predate = date;
              }
            } catch (err) {
              console.error(err);
            }

            const concat_exps = exps.concat(new_exps);
            setExps(concat_exps);
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error("requried firebase token");
      }
    },
    [token, exps]
  );

  useEffect(() => {
    fetchExpsData(startMonthDate.year(), startMonthDate.month());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, startMonthDate]);

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
        exps,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

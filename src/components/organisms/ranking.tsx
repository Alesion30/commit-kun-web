import { useEffect, useState, VFC } from "react";
import { useAuth } from "~/hooks";
import { CardTable } from "~/components/organisms/card_table";
import axios from "~/plugins/axios";

type RankingProps = {};

export const Ranking: VFC<RankingProps> = ({}) => {
  let [levels, setLevels] = useState(
    new Array<{ name: string; value: number }>()
  );

  const auth = useAuth();
  const token = auth.fbIdToken;

  //TODO: ごちゃっとしてるのでリファクタリングしたい
  useEffect(() => {
    const result = new Array<{ name: string; value: number }>();
    axios(token)
      .get("/rank")
      .then((res) => {
        res.data.forEach((d) => {
          result.push({ name: d.user.userName, value: d.level });
        });
        const sortedLevels = result.sort(function (a, b) {
          if (a.value > b.value) return -1;
          if (a.value < b.value) return 1;
          return 0;
        });
        setLevels(sortedLevels);
      });
  }, [token]);

  return (
    <div className="relative flex flex-col justify-center">
      <div className="mb-5 text-center">
        <p className="text-3xl font-bold">ランキング</p>
      </div>
      <CardTable
        title1="ランク"
        title2="ユーザー名"
        title3="レベル"
        items={levels}
      />
    </div>
  );
};

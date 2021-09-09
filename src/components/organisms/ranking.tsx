import { useEffect, useState, VFC } from "react";
import { useAuth } from "~/hooks";
import { CardTable } from "~/components/organisms/card_table";
import axios from "~/plugins/axios";

type RankingProps = {};

export const Ranking: VFC<RankingProps> = ({}) => {
  let [levels, setLevels] = useState(
    new Array<{ name: string; value: number }>()
  );

  const { authUser } = useAuth();
  console.log(authUser);

  //todo ごちゃっとしてるのでリファクタリングしたい
  useEffect(() => {
    const result = new Array<{ name: string; value: number }>();
    axios.get("http://localhost:3000/rank.json").then((res) => {
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
  }, []);

  return (
    <div
      className="relative flex flex-col h-full justify-center"
      style={{ margin: "5%" }}
    >
      <div>
        <p className="text-3xl m-5 text-center font-medium">Ranking</p>
      </div>
      <div className="flex-1 m-2">
        <CardTable title1="Rank" title2="Name" title3="Level" items={levels} />
      </div>
    </div>
  );
};

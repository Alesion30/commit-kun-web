import { VFC } from "react";
import { useAuth } from "~/hooks";
import { CardTable } from "~/components/organisms/card_table";

type RankingProps = {};

export const Ranking: VFC<RankingProps> = ({}) => {
  const { authUser } = useAuth();
  console.log(authUser);
  //todo ランキング取得
  const levels = [
    { name: "A", level: 12 },
    { name: "B", level: 34 },
    { name: "C", level: 4 },
    { name: "D", level: 99 },
    { name: "E", level: 11 },
    { name: "F", level: 45 },
    { name: "G", level: 15 },
    { name: "H", level: 36 },
    { name: "I", level: 43 },
    { name: "J", level: 1 },
    { name: "K", level: 14 },
    { name: "L", level: 45 },
  ];
  const sortedLevels = levels.sort(function (a, b) {
    if (a.level > b.level) return -1;
    if (a.level < b.level) return 1;
    return 0;
  });

  return (
    <div
      className="relative flex flex-col h-full justify-center"
      style={{ margin: "5%" }}
    >
      <div>
        <p className="text-3xl m-5 text-center font-medium">Ranking</p>
      </div>
      <div className="flex-1 m-2">
        <CardTable
          title1="Rank"
          title2="Name"
          title3="Level"
          color="purple-400"
          items={sortedLevels}
        />
      </div>
    </div>
  );
};

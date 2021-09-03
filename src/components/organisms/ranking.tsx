import { VFC } from "react";
import { useAuth } from "~/hooks";

type RankingProps = {};

export const Ranking: VFC<RankingProps> = ({}) => {
  const { authUser } = useAuth();
  console.log(authUser);
  //todo ランキング取得
  return (
    <div className="relative flex flex-col h-full justify-center">
      <div>ranking</div>
    </div>
  );
};

import React, { VFC } from "react";
import { RankingsResponse } from "~/data/remote/ranking";
import { classNames } from "~/utils";
import { Avatar } from "../atoms/avatar";

type RankingProps = {
  rankings: RankingsResponse;
};

export const Ranking: VFC<RankingProps> = ({ rankings }) => {
  return (
    <div className="relative flex flex-col justify-center">
      <div className="mb-5 text-center">
        <p className="text-3xl font-bold">ランキング（上位10人）</p>
      </div>
      <div className="container shadow-md">
        <table className="text-left w-full">
          <thead className="bg-gray-400 flex text-white w-full">
            <tr className="flex w-full">
              <th className="text-center p-4 w-1/6">ランク</th>
              <th className="text-center p-4 w-3/6">ユーザー名</th>
              <th className="text-center p-4 w-2/6">レベル</th>
              <th className="text-center p-4 w-2/6">経験値</th>
            </tr>
          </thead>
          <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
            {rankings.map((item, index) => {
              const rank = index + 1;

              let bgColor;
              let isFontWeight = false;

              switch (rank) {
                case 1:
                  bgColor = "bg-gold";
                  isFontWeight = true;
                  break;
                case 2:
                  bgColor = "bg-silver";
                  isFontWeight = true;
                  break;
                case 3:
                  bgColor = "bg-bronze";
                  isFontWeight = true;
                  break;
              }

              return (
                <tr
                  className="flex w-full py-1 hover:bg-gray-200"
                  key={`ranking_${index}`}
                >
                  <td className="text-center p-4 w-1/6">
                    <span
                      className={classNames(
                        "rounded-lg p-3",
                        isFontWeight ? "font-semibold" : "",
                        bgColor ?? ""
                      )}
                    >
                      {rank}位
                    </span>
                  </td>
                  <td className="p-4 w-3/6 flex items-center justify-center">
                    <Avatar
                      className="h-6 w-6 mr-2"
                      src={item.user?.imageUrl ?? ""}
                    />
                    {item.user?.userName ?? ""}
                  </td>
                  <td className="text-center p-4 w-2/6">{`Lv.${item.level}`}</td>
                  <td className="text-center p-4 w-2/6">
                    {`${item.experiencePoint}Exp`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

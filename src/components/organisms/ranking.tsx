import React, { VFC } from "react";
import { RankingsResponse } from "~/data/remote/ranking";
import { classNames, truncateChar } from "~/utils";
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
        <table className="text-left md:w-full custom-table">
          <thead className="bg-gray-400 flex text-white w-full">
            <tr className="flex w-full">
              <th className="text-center p-4 w-2/12">順位</th>
              <th className="text-center p-4 w-5/12">ユーザー名</th>
              <th className="text-center p-4 w-2/12">レベル</th>
              <th className="text-center p-4 w-3/12">経験値</th>
            </tr>
          </thead>
          <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
            {rankings.map((item, index) => {
              const rank = index + 1;

              let bgColor: string;
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
                  <td className="w-2/12 text-center p-4">
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
                  <td className="w-5/12 p-4 flex items-center justify-center">
                    <Avatar
                      className="h-6 w-6 mr-2"
                      src={item.user?.imageUrl ?? ""}
                    />
                    {truncateChar(item.user?.userName ?? "")}
                  </td>
                  <td className="w-2/12 text-center p-4">{`Lv.${item.level}`}</td>
                  <td className="w-3/12 text-center p-4">
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

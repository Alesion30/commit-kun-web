import React, { useEffect, useState, VFC } from "react";
import { useAuth } from "~/hooks";
import { getRankings, RankingsResponse } from "~/data/remote/ranking";
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
            {rankings.map((item, index) => (
              <tr
                className="flex w-full py-1 hover:bg-gray-200"
                key={`ranking_${index}`}
              >
                <td className="text-center p-4 w-1/6">{index + 1}位</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

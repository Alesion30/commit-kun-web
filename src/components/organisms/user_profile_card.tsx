import React, { useEffect, useState, VFC } from "react";
import { useAuth } from "~/hooks";
import { ImageWithProgress } from "~/components//molecules/image_with_progress";
import { SimpleCard } from "./card";
import { classNames } from "~/utils";

type UserProfileCardProps = {
  rank: number;
  level: number;
  experience: number;
};

export const UserProfileCard: VFC<UserProfileCardProps> = ({
  rank,
  level,
  experience,
}) => {
  const { authUser } = useAuth();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const LEVEL_STEP = 300;
    const prog = experience - (level - 1) * LEVEL_STEP;
    if (prog < 0) {
      setProgress(0);
      return;
    }
    setProgress((prog / LEVEL_STEP) * 100);
  }, [experience, level]);

  // ランク 色
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
    <SimpleCard>
      <div className="relative flex xl:flex-row flex-col justify-center items-center my-5 mx-4">
        <ImageWithProgress
          progress={progress}
          imageURL={authUser?.photoURL}
          className="w-72 h-72 xl:mr-10"
        />
        <div className="w-72 my-4 text-center">
          <p className="sm:text-5xl text-4xl font-semibold mb-7">
            {authUser?.userName ?? ""}
          </p>
          <p className="sm:text-3xl text-2xl mb-5">
            ランク:{" "}
            <span
              className={classNames(
                "rounded-lg p-3",
                isFontWeight ? "font-semibold" : "",
                bgColor ?? ""
              )}
            >
              {rank}位
            </span>
          </p>
          <p className="sm:text-3xl text-2xl mb-5">レベル: Lv.{level}</p>
          <p className="sm:text-3xl text-2xl">経験値: {experience}Exp</p>
        </div>
      </div>
    </SimpleCard>
  );
};

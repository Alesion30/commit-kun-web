import React, { useEffect, useRef, useState, VFC } from "react";
import { useAuth } from "~/hooks";
import { ImageWithProgress } from "~/components//molecules/image_with_progress";
import { SimpleCard } from "./card";

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

  return (
    <SimpleCard>
      <div className="relative flex xl:flex-row flex-col justify-center items-center my-5 mx-4">
        <ImageWithProgress
          progress={progress}
          imageURL={authUser?.photoURL}
          className="w-72 h-72 xl:mr-10"
        />
        <div className="w-72 my-4">
          <p className="sm:text-4xl text-3xl text-center mb-5">
            ランク: {rank}位
          </p>
          <p className="sm:text-4xl text-3xl text-center mb-5">
            レベル: {level}
          </p>
          <p className="sm:text-4xl text-3xl text-center">
            経験値: {experience}
          </p>
        </div>
      </div>
    </SimpleCard>
  );
};

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
  const isFirstRender = useRef(false);
  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const prog = experience - (level - 1) * 300;
    if (prog < 0) {
      setProgress(0);
      return;
    }
    setProgress((prog / 300) * 100);
  }, [experience, level, progress]);

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

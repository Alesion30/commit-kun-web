import { useEffect, useRef, useState, VFC } from "react";
import { ProgressCircleIcon } from "~/components/molecules/progress_circle_icon";
import { useAuth } from "~/hooks";

type LevelProps = {
  level: number;
  experience: number;
};

export const Level: VFC<LevelProps> = ({ level, experience }) => {
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
    <div className="relative flex flex-col h-full justify-center">
      <div>
        <p className="md:text-5xl text-4xl text-center font-medium">
          level {level}
        </p>
      </div>
      <div className="relative" style={{ margin: "10%" }}>
        <ProgressCircleIcon percentage={progress} />
        <div className="absolute h-full w-full bottom-0">
          <img
            className="block h-full w-full rounded-full"
            style={{ padding: "14%" }}
            src={authUser?.photoURL}
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
};

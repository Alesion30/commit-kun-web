import { VFC } from "react";
import { ProgressCircleIcon } from "~/components/molecules/progress_circle_icon";
import { useAuth } from "~/hooks";

type LevelProps = {
  level: number;
  progress: number;
};

export const Level: VFC<LevelProps> = ({ level, progress }) => {
  const { authUser } = useAuth();
  return (
    <div className="relative flex flex-col h-full justify-center">
      <div>
        <p className="text-5xl text-center font-medium">level {level}</p>
      </div>
      <div className="relative" style={{ margin: "8%" }}>
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

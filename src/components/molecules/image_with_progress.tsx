import { VFC } from "react";
import { classNames } from "~/utils";
import { levelColor } from "~/utils/levelColor";
import { ProgressCircleIcon } from "./progress_circle_icon";

type ImageWithProgressProps = {
  progress: number;
  imageURL: string;
  className?: string;
  level: number;
};

export const ImageWithProgress: VFC<ImageWithProgressProps> = ({
  progress,
  imageURL,
  className,
  level,
}) => {
  return (
    <div className={classNames("relative", className ?? "")}>
      <ProgressCircleIcon percentage={progress} />
      <div className="absolute h-full w-full bottom-0">
        <img
          className="block h-full w-full rounded-full"
          style={{ padding: "14%" }}
          src={imageURL}
          alt=""
        />
      </div>
      <div className="absolute w-full bottom-0 flex justify-center items-center">
        <div
          className={classNames(
            "rounded-lg w-24 h-16 border-2 border-gray-400",
            levelColor(level)
          )}
        >
          <p className="mt-4 font-bold text-black text-2xl">Lv.{level}</p>
        </div>
      </div>
    </div>
  );
};

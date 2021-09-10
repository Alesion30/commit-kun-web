import { VFC } from "react";
import { classNames } from "~/utils";
import { ProgressCircleIcon } from "./progress_circle_icon";

type ImageWithProgressProps = {
  progress: number;
  imageURL: string;
  className?: string;
};

export const ImageWithProgress: VFC<ImageWithProgressProps> = ({
  progress,
  imageURL,
  className,
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
    </div>
  );
};

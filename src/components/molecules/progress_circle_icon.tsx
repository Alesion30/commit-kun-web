import { VFC, useState, useEffect } from "react";
import { Circle } from "react-circle";

type ProgressCircleIconProps = {
  percentage: number;
};

/**
 * Molecule: プログレスバー付きアイコン
 *
 * https://github.com/zzarcon/react-circle
 */
export const ProgressCircleIcon: VFC<ProgressCircleIconProps> = ({
  percentage,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(setCount, 100, percentage);
    if (percentage > 0) {
      setIsAnimate(true);
    }
  }, [percentage]);

  return (
    <Circle
      animate={isAnimate}
      progress={count}
      roundedStroke={true}
      showPercentage={false}
      responsive={true}
    />
  );
};

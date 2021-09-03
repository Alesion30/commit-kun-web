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
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(setCount, 100, percentage);
  }, [percentage]);

  return (
    <Circle
      animate={true}
      progress={count}
      roundedStroke={true}
      showPercentage={false}
      responsive={true}
    />
  );
};

import { VFC, useEffect, useState } from "react";

type ProgressBarProps = {
  percentage: number;
};

/**
 * Atom: プログレスバー 進捗度を表示
 */
export const ProgressBar: VFC<ProgressBarProps> = ({ percentage }) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const _percentage = percentage > 0 ? percentage : 0;
    setTimeout(setCount, 100, _percentage);
  }, [percentage]);

  return (
    <div className="shadow w-full h-5 bg-gray-300 rounded-lg">
      <div
        className="bg-blue-400 h-full text-xs rounded-lg leading-none py-1 text-center text-white transition-all duration-1000 ease-in-out"
        style={{
          width: count >= 0 && count <= 100 ? `${count}%` : "100%",
        }}
      >
        {`${percentage}%`}
      </div>
    </div>
  );
};

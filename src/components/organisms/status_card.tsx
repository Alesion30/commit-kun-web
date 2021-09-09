import { VFC, useState, useEffect } from "react";
import { SimpleCard } from "~/components/organisms/card";
import { classNames } from "~/utils";

type StatusCardProps = {
  title: string;
  value?: string | number;
  preValue?: string | number;
  onClick?: () => void;
  /** ラベル */
  label: string;
  /** 単位 */
  unit?: string;
  /** tailwindの色を指定(eg. red-400) */
  color?: string;
};

/**
 * Organism: ステータスカード
 *
 * https://tailwindcomponents.com/component/dashboard-stats
 */
export const StatusCard: VFC<StatusCardProps> = ({
  title,
  value,
  preValue,
  onClick,
  label,
  unit,
  color,
}) => {
  const bgColorClassName = color ?? "bg-red-400";
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setOpacity(0);
    setTimeout(setOpacity, 100, 1);
  }, [value, preValue]);

  return (
    <SimpleCard onClick={onClick}>
      <div
        className={classNames(
          bgColorClassName,
          "h-20 flex items-center justify-between"
        )}
      >
        <p className="mr-0 text-white text-lg px-5">{title}</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-md text-gray-600">
        <p>{label}</p>
      </div>
      {value != null && (
        <p
          style={{ opacity: opacity }}
          className="py-4 text-left mx-5 transition duration-700 ease-in-out"
        >
          {preValue != null && (
            <span className="text-3xl">
              {preValue}
              <span className="text-xl">{unit}</span>
              <span>&nbsp;-&gt;&nbsp;</span>
            </span>
          )}
          <span className="text-5xl text-red-500">{value ?? "-"}</span>
          {unit && <span className="text-3xl">{unit}</span>}
        </p>
      )}
      {value == null && <p className="py-10 text-left"></p>}
    </SimpleCard>
  );
};

import { VFC } from "react";
import { classNames } from "~/utils";
import { Dayjs } from "~/plugins/dayjs";

type StatusCardProps = {
  title: string;
  value: string;
  preValue?: string;
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
  const bgColorClassName = color ? `bg-${color}` : "bg-red-400";
  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition duration-500 transform hover:scale-100 cursor-pointer"
    >
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
      <p className="py-4 text-left mx-5">
        {preValue && (
          <span className="text-2xl text-red-500">
            {preValue}
            <span className="text-xl">{unit}</span>
            &nbsp;-&gt;&nbsp;
          </span>
        )}
        <span className="text-3xl">{value}</span>
        {unit && <span className="text-2xl">{unit}</span>}
      </p>
    </div>
  );
};

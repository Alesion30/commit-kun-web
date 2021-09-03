import { VFC } from "react";
import { classNames } from "~/utils";

type CalendarCellProps = {
  /** 日付 */
  date?: number;
  /** アクティブ */
  active?: boolean;
  /** 日付をクリック */
  onClick?: () => void;

  /** ボーダーTOP */
  top?: boolean;
  /** ボーダーRIGHT */
  right?: boolean;
  /** ボーダーBOTTOM */
  bottom?: boolean;
  /** ボーダーLEFT */
  left?: boolean;
};

/**
 * Atom: カレンダー日付
 */
export const CalendarCell: VFC<CalendarCellProps> = ({
  date,
  active,
  onClick,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: `${100 / 7}%`, height: 130 }}
      className={classNames(
        onClick ? "cursor-pointer" : "cursor-default",
        top ? "border-t" : "",
        right ? "border-r" : "",
        bottom ? "border-b" : "",
        left ? "border-l" : "",
        "p-2 relative"
      )}
    >
      {date != undefined && (
        <div
          className={classNames(
            active
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-200",
            "absolute top-2 left-2 inline-flex w-8 h-8 items-center justify-center leading-none rounded-full transition ease-in-out duration-200"
          )}
        >
          {date.toString()}
        </div>
      )}
    </div>
  );
};

type CalendarDayCellProps = {
  /** 曜日 */
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /** ボーダーTOP */
  top?: boolean;
  /** ボーダーRIGHT */
  right?: boolean;
  /** ボーダーBOTTOM */
  bottom?: boolean;
  /** ボーダーLEFT */
  left?: boolean;
};

/**
 * Atom: カレンダー曜日
 */
export const CalendarDayCell: VFC<CalendarDayCellProps> = ({
  day,
  top,
  right,
  bottom,
  left,
}) => {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div
      style={{ width: `${100 / 7}%` }}
      className={classNames(
        top ? "border-t" : "",
        right ? "border-r" : "",
        bottom ? "border-b" : "",
        left ? "border-l" : "",
        "p-2"
      )}
    >
      <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
        {DAYS[day]}
      </div>
    </div>
  );
};

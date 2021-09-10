import { VFC } from "react";
import { classNames } from "~/utils";
import { Dayjs } from "~/plugins/dayjs";

type CalendarCellProps = {
  /** 日付 */
  date?: Dayjs;
  /** アクティブ */
  active?: boolean;
  /** 日付をクリック */
  onClick?: () => void;
  /** disabled */
  disabled?: boolean;
  /** 背景色 */
  bgColor?: string;

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
  disabled,
  bgColor,
  top,
  right,
  bottom,
  left,
}) => {
  let dateColor = "text-gray-700";
  if (date?.day() === 0) dateColor = "text-red-700"; // 日曜日
  if (date?.day() === 6) dateColor = "text-blue-700"; // 土曜日

  const _onClick = disabled ? undefined : onClick;

  return (
    <div
      onClick={_onClick}
      style={{ width: `${100 / 7}%`, height: 130 }}
      className={classNames(
        _onClick
          ? "cursor-pointer hover:bg-blue-100 transition ease-in-out duration-500"
          : "cursor-default",
        disabled ? "bg-gray-100" : "",
        bgColor && !disabled ? `${bgColor}` : "",
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
            active ? "bg-blue-500 text-white" : `${dateColor}`,
            "absolute top-2 left-2 inline-flex w-8 h-8 items-center justify-center leading-none rounded-full transition ease-in-out duration-200"
          )}
        >
          {date.format("D")}
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

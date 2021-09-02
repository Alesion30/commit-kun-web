import { VFC } from "react";

type CalendarHeaderProps = {
  /** 年 */
  year: number;
  /** 月 */
  month: number;
  /** 前の月へ */
  onClickPrevMonth: () => void;
  /** 次の月へ */
  onClickNextMonth: () => void;
};

/**
 * Molecule: カレンダーヘッダー
 *
 * カレンダーで使用
 *
 */
export const CalendarHeader: VFC<CalendarHeaderProps> = ({
  year,
  month,
  onClickPrevMonth,
  onClickNextMonth,
}) => {
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span className="text-lg font-bold text-gray-800">
          {MONTH_NAMES[month - 1]}
        </span>
        <span className="ml-1 text-lg text-gray-600 font-normal">
          {year.toString()}
        </span>
      </div>
      <div className="border rounded-lg px-1" style={{ paddingTop: 2 }}>
        <button
          type="button"
          onClick={onClickPrevMonth}
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="border-r inline-flex h-6"></div>
        <button
          type="button"
          onClick={onClickNextMonth}
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

import { VFC } from "react";
import { PagenationButton } from "~/components/atoms/pagenation_button";

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
      <PagenationButton
        onClickPrev={onClickPrevMonth}
        onClickNext={onClickNextMonth}
      />
    </div>
  );
};

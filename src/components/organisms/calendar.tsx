import { VFC } from "react";
import { CalendarHeader } from "~/components/molecules/calendar_header";
import { CalendarDayColumn } from "~/components/molecules/calendar_day_column";
import { CalendarCell } from "~/components/atoms/calendar_cell";
import dayjs, { Dayjs } from "~/plugins/dayjs";

type CalendarProps = {
  /** 月初め */
  startMonthDate: Dayjs;
  /** 前の月へ */
  onClickPrevMonth: () => void;
  /** 次の月へ */
  onClickNextMonth: () => void;
};

/**
 * Organism: カレンダー
 *
 * https://tailwindcomponents.com/component/calendar-ui-with-tailwindcss-and-alpinejs
 */
export const Calendar: VFC<CalendarProps> = ({
  startMonthDate,
  onClickPrevMonth,
  onClickNextMonth,
}) => {
  const dates = new Array<Dayjs | null>(startMonthDate.day()).fill(null);
  const endMonthDate = startMonthDate.endOf("M");
  let date = startMonthDate;
  while (date < endMonthDate) {
    dates.push(date);
    date = date.add(1, "d");
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <CalendarHeader
        year={startMonthDate.year()}
        month={startMonthDate.month() + 1}
        onClickPrevMonth={onClickPrevMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <CalendarDayColumn />

      <div className="flex flex-wrap">
        {dates.map((item, index) => {
          // 今日かどうか
          const isToday = dayjs().startOf("d").diff(item, "d") === 0;

          // 日にち
          const date = item?.date() ?? undefined;

          // ボーダー
          let top = false;
          let right = true;
          let bottom = true;

          // 一番上の列
          if (index <= 6) top = true;

          // 一番右の列
          if (index % 7 == 6) right = false;

          // 一番下の列
          if (date >= endMonthDate.date() - endMonthDate.day()) bottom = false;

          return (
            <CalendarCell
              key={`calendar_cell_${index}`}
              date={date}
              isToday={isToday}
              top={top}
              right={right}
              bottom={bottom}
            />
          );
        })}
      </div>
    </div>
  );
};
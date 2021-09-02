import { VFC } from "react";
import { CalendarDayCell } from "~/components/atoms/calendar_cell";

/**
 * Molecule: カレンダー曜日列
 *
 * カレンダーで使用
 *
 */
export const CalendarDayColumn: VFC = () => {
  return (
    <div className="flex flex-wrap">
      <CalendarDayCell day={0} />
      <CalendarDayCell day={1} />
      <CalendarDayCell day={2} />
      <CalendarDayCell day={3} />
      <CalendarDayCell day={4} />
      <CalendarDayCell day={5} />
      <CalendarDayCell day={6} />
    </div>
  );
};

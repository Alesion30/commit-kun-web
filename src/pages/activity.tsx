// ********************************************************************************
// アクティビティ画面
// ********************************************************************************

import { NextPage } from "next";
import { useState } from "react";
import dayjs, { Dayjs } from "~/plugins/dayjs";
import { MainLayout } from "~/components/templates/main";
import { Calendar } from "~/components/organisms/calendar";
import { withAuth } from "~/hocs";

const Activity: NextPage = () => {
  const [startMonthDate, setStartMonthDate] = useState<Dayjs>(
    dayjs().startOf("M")
  );
  const onClickPrevMonth = () => {
    const prevMonthDate = startMonthDate.subtract(1, "M");
    setStartMonthDate(prevMonthDate);
  };
  const onClickNextMonth = () => {
    const nextMonthDate = startMonthDate.add(1, "M");
    setStartMonthDate(nextMonthDate);
  };

  return (
    <MainLayout>
      <div className="py-10 text-center">
        <Calendar
          startMonthDate={startMonthDate}
          onClickPrevMonth={onClickPrevMonth}
          onClickNextMonth={onClickNextMonth}
        />
      </div>
    </MainLayout>
  );
};

export default withAuth(Activity);

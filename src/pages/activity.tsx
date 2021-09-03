// ********************************************************************************
// アクティビティ画面
// ********************************************************************************

import { NextPage } from "next";
import { useState } from "react";
import dayjs, { Dayjs } from "~/plugins/dayjs";
import { MainLayout } from "~/components/templates/main";
import { Calendar } from "~/components/organisms/calendar";
import { withAuth } from "~/hocs";
import { StatusCard } from "~/components/organisms/card";

const Activity: NextPage = () => {
  // カレンダー年月
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

  // 選択されている日付
  const [date, setDate] = useState<Dayjs>(dayjs());
  const dateStr = date.format("YYYY年MM月DD日");

  return (
    <MainLayout>
      <div className="container mx-auto py-10 text-center">
        <div className="flex flex-wrap justify-center mb-2">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="レベル"
              label="TOTAL"
              value="25"
              preValue="16"
              color="pink-400"
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="経験値"
              label="TOTAL"
              value="2500"
              preValue="1600"
              color="gray-400"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-10">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コードを書いている時間"
              label={dateStr}
              value="2.5"
              preValue="1.0"
              unit="hour"
              color="blue-400"
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コミット数"
              label={dateStr}
              value="15"
              color="red-400"
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コード量"
              label={dateStr}
              value="592"
              unit="words"
              color="green-400"
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="PRコメント数"
              label={dateStr}
              value="4"
              color="yellow-400"
            />
          </div>
        </div>
        <Calendar
          startMonthDate={startMonthDate}
          onClickPrevMonth={onClickPrevMonth}
          onClickNextMonth={onClickNextMonth}
          selectedDate={date}
          onClick={(d) => setDate(d)}
        />
      </div>
    </MainLayout>
  );
};

export default withAuth(Activity);

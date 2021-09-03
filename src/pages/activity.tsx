// ********************************************************************************
// アクティビティ画面
// ********************************************************************************

import { NextPage } from "next";
import { useState } from "react";
import dayjs, { Dayjs } from "~/plugins/dayjs";
import { MainLayout } from "~/components/templates/main";
import { Calendar } from "~/components/organisms/calendar";
import { withAuth } from "~/hocs";
import { StatusCard } from "~/components/organisms/status_card";
import { TailwindUIModal } from "~/components/organisms/modal";
import {
  ChartJSDailyBar,
  ChartJSDailyBarProps,
} from "~/components/organisms/chart";

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

  // モーダル
  const [open, setOpen] = useState<boolean>(false);
  const onClickOpen = () => setOpen(true);
  const onClickClose = () => setOpen(false);

  // DailyBar コンテンツ
  const [dailyBarContent, setDailyBarContent] = useState<ChartJSDailyBarProps>({
    title: "",
    data: [],
    color: "blue",
  });
  const mockData = [...Array(24)].map((_, __) => Math.random() * 100);

  return (
    <MainLayout>
      <TailwindUIModal open={open} onClose={onClickClose}>
        <div className="sm:p-10 p-2">
          <ChartJSDailyBar
            title={dailyBarContent.title}
            data={dailyBarContent.data}
            color={dailyBarContent.color}
          />
        </div>
      </TailwindUIModal>

      <div className="container mx-auto sm:py-10 py-2 text-center">
        <div className="flex flex-wrap justify-center mb-2">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="レベル"
              label="TOTAL"
              value="25"
              preValue="16"
              color="bg-pink-400"
              onClick={() => {
                setDailyBarContent({
                  title: "レベル",
                  data: mockData,
                  color: "pink",
                });
                onClickOpen();
              }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="経験値"
              label="TOTAL"
              value="2500"
              preValue="1600"
              color="bg-gray-400"
              onClick={() => {
                setDailyBarContent({
                  title: "経験値",
                  data: mockData,
                  color: "gray",
                });
                onClickOpen();
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-10">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="作業時間"
              label={dateStr}
              value="2.5"
              preValue="1.0"
              unit="hour"
              color="bg-blue-400"
              onClick={() => {
                setDailyBarContent({
                  title: "作業時間",
                  data: mockData,
                  color: "blue",
                });
                onClickOpen();
              }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コミット数"
              label={dateStr}
              value="15"
              color="bg-red-400"
              onClick={() => {
                setDailyBarContent({
                  title: "コミット数",
                  data: mockData,
                  color: "red",
                });
                onClickOpen();
              }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コード量"
              label={dateStr}
              value="592"
              unit="words"
              color="bg-green-400"
              onClick={() => {
                setDailyBarContent({
                  title: "コード量",
                  data: mockData,
                  color: "green",
                });
                onClickOpen();
              }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="PRコメント数"
              label={dateStr}
              value="4"
              color="bg-yellow-400"
              onClick={() => {
                setDailyBarContent({
                  title: "PRコメント数",
                  data: mockData,
                  color: "yellow",
                });
                onClickOpen();
              }}
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

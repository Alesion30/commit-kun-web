// ********************************************************************************
// アクティビティ画面
// ********************************************************************************

import { NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "~/components/templates/main";
import { Calendar, CalendarCellStyle } from "~/components/organisms/calendar";
import { withAuth } from "~/hocs";
import { StatusCard } from "~/components/organisms/status_card";
import { TailwindUIModal } from "~/components/organisms/modal";
import {
  ChartJSDailyBar,
  ChartJSDailyBarProps,
} from "~/components/organisms/chart";
import useActivity from "~/hooks/activity";
import dayjs from "~/plugins/dayjs";

const Activity: NextPage = () => {
  // アクティビティ情報
  const activity = useActivity();
  const { activityLog } = activity;
  const { workTime, commit, typeNum, prComment } = activity;

  // カレンダー年月
  const { startMonthDate, onClickPrevMonth, onClickNextMonth } = activity;

  // 選択されている日付
  const { date, setDate } = activity;
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

  // カレンダー 経験値に応じて色付け
  const { exps } = activity;
  const calendarCellStyles: CalendarCellStyle[] = exps.map((exp) => {
    // 背景色
    let bgColor = "bg-white";
    if (exp.experiencePoint > 1000) {
      bgColor = "bg-green-500";
    } else if (exp.experiencePoint > 0) {
      bgColor = "bg-green-100";
    }
    const calendarCellStyle: CalendarCellStyle = {
      date: dayjs(exp.date),
      bgColor: bgColor,
    };
    return calendarCellStyle;
  });

  return (
    <MainLayout>
      <TailwindUIModal open={open} onClose={onClickClose}>
        <div className="sm:px-10 sm:py-6 px-2 py-4 text-center text-gray-700">
          <h2 className="text-lg sm:text-2xl font-medium mb-2">{dateStr}</h2>
          <ChartJSDailyBar
            title={dailyBarContent.title}
            data={dailyBarContent.data}
            color={dailyBarContent.color}
          />
        </div>
      </TailwindUIModal>

      <div className="container xl:w-4/5 w-full mx-auto sm:pt-4 sm:pb-20 px-2 pt-2 pb-10 text-center">
        <div className="flex flex-wrap justify-center mb-2">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="レベル"
              label="TOTAL"
              value={activityLog?.level?.todayData}
              preValue={activityLog?.level?.yesterdayData}
              color="bg-pink-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "レベル",
              //     data: mockData,
              //     color: "pink",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="経験値"
              label="TOTAL"
              value={activityLog?.experiencePoint?.todayData}
              preValue={activityLog?.experiencePoint?.yesterdayData}
              unit="Exp"
              color="bg-gray-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "経験値",
              //     data: mockData,
              //     color: "gray",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-10">
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="作業時間"
              label={dateStr}
              value={activityLog?.workTime?.todayData}
              preValue={activityLog?.workTime?.yesterdayData}
              unit="hour"
              color="bg-blue-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "作業時間",
              //     data: workTime
              //       ? workTime.hours.map((hour) => hour.workTime)
              //       : [],
              //     color: "blue",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コミット数"
              label={dateStr}
              value={activityLog?.commit?.todayData}
              preValue={activityLog?.commit?.yesterdayData}
              color="bg-red-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "コミット数",
              //     data: commit ? commit.hours.map((hour) => hour.commit) : [],
              //     color: "red",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="コード量"
              label={dateStr}
              value={activityLog?.typeNum?.todayData}
              preValue={activityLog?.typeNum?.yesterdayData}
              unit="words"
              color="bg-green-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "コード量",
              //     data: typeNum
              //       ? typeNum.hours.map((hour) => hour.typeNum)
              //       : [],
              //     color: "green",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
          <div className="m-2 xl:flex-1 flex-auto">
            <StatusCard
              title="PRコメント数"
              label={dateStr}
              value={activityLog?.prComment?.todayData}
              preValue={activityLog?.prComment?.yesterdayData}
              color="bg-yellow-400"
              // onClick={() => {
              //   setDailyBarContent({
              //     title: "PRコメント数",
              //     data: prComment
              //       ? prComment.hours.map((hour) => hour.prComment)
              //       : [],
              //     color: "yellow",
              //   });
              //   onClickOpen();
              // }}
            />
          </div>
        </div>
        <Calendar
          startMonthDate={startMonthDate}
          onClickPrevMonth={onClickPrevMonth}
          onClickNextMonth={onClickNextMonth}
          selectedDate={date}
          onClick={(d) => {
            if (activity.isLoading === false) setDate(d);
          }}
          calendarCellStyles={calendarCellStyles}
        />
      </div>
    </MainLayout>
  );
};

export default withAuth(Activity);

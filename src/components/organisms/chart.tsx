import { VFC } from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

type ColorType =
  | "red"
  | "pink"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "gray";

type BarColor = {
  background: string;
  border: string;
};

const BAR_COLORS: { [P in ColorType]: BarColor } = {
  red: {
    background: "rgba(248, 113, 113, 0.2)",
    border: "rgba(248, 113, 113)",
  },
  pink: {
    background: "rgba(244, 114, 182, 0.2)",
    border: "rgba(244, 114, 182)",
  },
  yellow: {
    background: "rgba(251, 191, 36, 0.2)",
    border: "rgba(251, 191, 36)",
  },
  green: {
    background: "rgba(52, 211, 153, 0.2)",
    border: "rgba(52, 211, 153)",
  },
  blue: {
    background: "rgba(96, 165, 250, 0.2)",
    border: "rgba(96, 165, 250)",
  },
  purple: {
    background: "rgba(167, 139, 250, 0.2)",
    border: "rgba(167, 139, 250)",
  },
  gray: {
    background: "rgba(156, 163, 175, 0.2)",
    border: "rgba(156, 163, 175)",
  },
};

export type ChartJSDailyBarProps = {
  title: string;
  data: number[];
  color: ColorType;
};

/**
 * Organism: ステータスカード
 */
export const ChartJSDailyBar: VFC<ChartJSDailyBarProps> = ({
  title,
  data,
  color,
}) => {
  const barColor = BAR_COLORS[color];

  const chartData: ChartData = {
    labels: [...Array(24)].map((_, i) => `${i}時`),
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: barColor.background,
        borderColor: barColor.border,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
  };

  return <Bar data={chartData} options={options} />;
};

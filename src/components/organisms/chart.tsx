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
    background: "rgba(255, 99, 132, 0.2)",
    border: "rgba(255, 99, 132)",
  },
  pink: {
    background: "rgba(244, 114, 182, 0.2)",
    border: "rgba(244, 114, 182)",
  },
  yellow: {
    background: "rgba(255, 205, 86, 0.2)",
    border: "rgba(255, 205, 86)",
  },
  green: {
    background: "rgba(75, 192, 192, 0.2)",
    border: "rgba(75, 192, 192)",
  },
  blue: {
    background: "rgba(54, 162, 235, 0.2)",
    border: "rgba(54, 162, 235)",
  },
  purple: {
    background: "rgba(153, 102, 255, 0.2)",
    border: "rgba(153, 102, 255)",
  },
  gray: {
    background: "rgba(201, 203, 207, 0.2)",
    border: "rgba(201, 203, 207)",
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

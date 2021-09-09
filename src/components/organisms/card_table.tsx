import { VFC } from "react";

type CardTableProps = {
  title1: string;
  title2: string;
  title3: string;
  items: { name: string; value: number }[];
  /** tailwindの色を指定(eg. red-400) */
  color?: string;
};

/**
 * Organism: ステータスカード
 *
 * https://tailwindcomponents.com/component/dashboard-stats
 */
export const CardTable: VFC<CardTableProps> = ({
  title1,
  title2,
  title3,
  items,
}) => {
  return (
    <div className="container shadow-md">
      <table className="text-left w-full">
        <thead className="bg-gray-400 bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
            <th className="text-center p-4 w-1/6">{title1}</th>
            <th className="text-center p-4 w-3/6">{title2}</th>
            <th className="text-center p-4 w-2/6">{title3}</th>
          </tr>
        </thead>
        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
          style={{ height: "50vh" }}
        >
          {items.map((item, index) => (
            <tr className="flex w-full mb-4" key={item.name + index}>
              <td className="text-center p-4 w-1/6">{index + 1}</td>
              <td className="text-center p-4 w-3/6">{item.name}</td>
              <td className="text-center p-4 w-2/6">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

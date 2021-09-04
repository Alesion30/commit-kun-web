import { VFC } from "react";
import { classNames } from "~/utils";

type CardTableProps = {
  title1: string;
  title2: string;
  title3: string;
  items: { name: string; level: number }[];
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
  color,
}) => {
  const bgColorClassName = color ? `bg-${color}` : "bg-red-400";
  return (
    <div className="container bg-white shadow-xl h-full">
      <div className="bg-white h-full rounded">
        <table className="w-full h-full text-left border-collapse">
          <thead className="table table-fixed w-full">
            <tr>
              <th
                className={classNames(
                  bgColorClassName,
                  "w-1/6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                )}
                style={{ padding: "3%" }}
              >
                {title1}
              </th>
              <th
                className={classNames(
                  bgColorClassName,
                  "w-3/6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                )}
                style={{ padding: "3%" }}
              >
                {title2}
              </th>
              <th
                className={classNames(
                  bgColorClassName,
                  "w-2/6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                )}
                style={{ padding: "3%" }}
              >
                {title3}
              </th>
            </tr>
          </thead>
          <tbody className="block h-5/6 w-full overflow-y-scroll">
            {items.map((item, index) => (
              <tr
                className="hover:bg-grey-lighter table table-fixed w-full"
                key={item.name}
              >
                <td className="w-1/6 py-4 px-6 text-center border-b border-grey-light">
                  {index + 1}
                </td>
                <td className="w-3/6 py-4 px-6 text-center border-b border-grey-light">
                  {item.name}
                </td>
                <td className="w-2/6 py-4 px-6 text-center border-b border-grey-light">
                  {item.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

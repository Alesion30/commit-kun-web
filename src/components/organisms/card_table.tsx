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
    <div className="container mr-5 mx-auto bg-white shadow-xl">
      <div className="w-11/12 mx-auto">
        <div className="bg-white my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th
                  className={classNames(
                    bgColorClassName,
                    "w-1/6 py-4 px-6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                  )}
                >
                  {title1}
                </th>
                <th
                  className={classNames(
                    bgColorClassName,
                    "w-3/6 py-4 px-6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                  )}
                >
                  {title2}
                </th>
                <th
                  className={classNames(
                    bgColorClassName,
                    "w-1/2 py-4 px-6 text-center font-bold uppercase text-sm text-white border-b border-grey-light"
                  )}
                >
                  {title3}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr className="hover:bg-grey-lighter" key={item.name}>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-center border-b border-grey-light">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-center border-b border-grey-light">
                    {item.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

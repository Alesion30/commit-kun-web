import { VFC } from "react";
import { classNames } from "~/utils";

type TabCellProps = {
  name: string;
  active: boolean;
  onClick: () => void;
};

/**
 * Atom: タブ
 *
 * tabsで使用
 */
export const TabCell: VFC<TabCellProps> = ({ name, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={classNames(
        active ? "bg-pink-400" : "bg-gray-100",
        "py-2 px-6 rounded-t-lg border border-gray-200"
      )}
    >
      <span
        className={classNames(
          active ? "text-white" : "text-gray-500",
          "text-sm"
        )}
      >
        {name}
      </span>
    </li>
  );
};

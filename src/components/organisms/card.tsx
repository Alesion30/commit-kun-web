import { VFC, ReactNode } from "react";
import { classNames } from "~/utils";

type SimpleCardProps = {
  onClick?: () => void;
  children: ReactNode;
  roundless?: boolean;
};

/**
 * Organism: シンプルカード
 */
export const SimpleCard: VFC<SimpleCardProps> = ({
  onClick,
  children,
  roundless,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        roundless ? "rounded-none" : "rounded-lg",
        onClick
          ? "hover:shadow-xl transition duration-500 transform hover:scale-100 cursor-pointer"
          : "",
        "w-full bg-white overflow-hidden shadow-md border"
      )}
    >
      {children}
    </div>
  );
};

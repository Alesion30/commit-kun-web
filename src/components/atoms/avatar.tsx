import { VFC } from "react";
import { classNames } from "~/utils";

type AvatarProps = {
  src: string;
  className?: string;
};

/**
 * Atom: アバター画像
 */
export const Avatar: VFC<AvatarProps> = ({ src, className }) => {
  return (
    <img
      className={classNames(className ?? "h-8 w-8", "rounded-full")}
      src={src}
      alt=""
    />
  );
};

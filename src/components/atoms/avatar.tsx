import { VFC } from "react";

type AvatarProps = {
  src: string;
};

/**
 * Atom: アバター画像
 */
export const Avatar: VFC<AvatarProps> = ({ src }) => {
  return <img className="h-8 w-8 rounded-full" src={src} alt="" />;
};

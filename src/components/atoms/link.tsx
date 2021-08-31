import { VFC } from "react";
import { classNames } from "~/utils";

type NavbarLinkProps = {
  name: string;
  href: string;
  active: boolean;
  className?: string;
};

/**
 * Atom: Navbarのリンク
 */
export const NavbarLink: VFC<NavbarLinkProps> = ({
  name,
  href,
  active,
  className,
}) => {
  return (
    <a
      href={href}
      className={classNames(
        active
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "px-3 py-2 rounded-md text-sm font-medium",
        className ?? ""
      )}
      aria-current={active ? "page" : undefined}
    >
      {name}
    </a>
  );
};

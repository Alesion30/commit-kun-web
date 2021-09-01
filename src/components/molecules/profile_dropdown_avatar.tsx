import React, { VFC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "~/utils";
import { Avatar } from "~/components/atoms/avatar";

export type ProfileDropdownNavigation = {
  name: string;
  href: string;
  onClick?: () => void;
};

export type ProfileDropdownAvatarProps = {
  navigations: ProfileDropdownNavigation[];
  imageURL: string;
};

/**
 * Molecule: プロフィール ドロップダウン アバター
 *
 * TailwindUIHeaderで使用
 *
 * https://tailwindui.com/components/application-ui/navigation/navbars
 */
export const ProfileDropdownAvatar: VFC<ProfileDropdownAvatarProps> = ({
  navigations,
  imageURL,
}) => {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <Avatar src={imageURL} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {navigations.map((navigation, index) => (
            <Menu.Item key={`profile_dropdown_avator_menu_item_${index}`}>
              {({ active }) => (
                <a
                  href={navigation.href}
                  onClick={navigation.onClick}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {navigation.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

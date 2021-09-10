import { VFC } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  ProfileDropdownAvatar,
  ProfileDropdownNavigation,
} from "~/components/molecules/profile_dropdown_avatar";
import { NavbarLink } from "~/components/atoms/link";
import { useRouter } from "next/router";
import CommitKunLogo from "~/assets/img/commit-kun.svg";
import CommitKunIcon from "~/assets/img/commit-kun-icon.png";
import { useAuth } from "~/hooks";

type Navigation = {
  name: string;
  href: string;
};

type TailwindUIHeaderProps = {
  onClickSignOut: () => void;
  myImageURL: string;
};

/**
 * Organism: TailwindUIのヘッダー
 *
 * https://tailwindui.com/components/application-ui/navigation/navbars
 */
export const TailwindUIHeader: VFC<TailwindUIHeaderProps> = ({
  onClickSignOut,
  myImageURL,
}) => {
  const router = useRouter();
  const pathname = router.pathname;

  // ユーザーIDをコピー
  const auth = useAuth();
  const onClickUserIdCopy = () =>
    navigator.clipboard.writeText(auth.authUser?.uid ?? "");

  // メイン ナビゲーション
  const navigations: Navigation[] = [
    { name: "ホーム", href: "/" },
    { name: "ミッション", href: "/mission" },
    { name: "アクティビティ", href: "/activity" },
    // { name: "フレンド", href: "/friend" },
  ];

  // プロフィール ドロップダウン
  const profileNavigations: ProfileDropdownNavigation[] = [
    // { name: "Your Profile", href: "" },
    // { name: "Settings", href: "" },
    { name: "ユーザーIDをコピー", onClick: onClickUserIdCopy },
    { name: "ログアウト", onClick: onClickSignOut },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="lg:hidden p-0 m-0" style={{ height: 38 }}>
                    <Image
                      width={38}
                      height={38}
                      src={CommitKunIcon}
                      alt="Workflow"
                    />
                  </div>
                  <CommitKunLogo className="hidden lg:block h-8 w-auto" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigations.map((item) => (
                      <NavbarLink
                        key={`navbar_link_${item.name}`}
                        name={item.name}
                        href={item.href}
                        active={pathname === item.href}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                <ProfileDropdownAvatar
                  imageURL={myImageURL}
                  navigations={profileNavigations}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigations.map((item) => (
                <NavbarLink
                  key={`mobile_navbar_link_${item.name}`}
                  name={item.name}
                  href={item.href}
                  active={pathname === item.href}
                  className="block text-base font-medium"
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

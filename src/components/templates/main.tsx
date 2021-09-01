// ********************************************************************************
// ログイン後ページ レイアウト
// ********************************************************************************

import { VFC, ReactNode } from "react";
import Head from "next/head";
import appConfig from "~/config/app";
import { TailwindUIHeader } from "~/components/organisms/header";
import { signOut } from "~/plugins/firebase";
import { useAuth } from "~/hooks";

export type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: VFC<MainLayoutProps> = ({ children }) => {
  const { authUser } = useAuth();
  const onClickSignOut = () => signOut();
  return (
    <div>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <TailwindUIHeader
        myImageURL={authUser.photoURL}
        onClickSignOut={onClickSignOut}
      />
      <main className="container mx-auto text-center">{children}</main>
    </div>
  );
};

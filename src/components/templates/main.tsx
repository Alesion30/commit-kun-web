// ********************************************************************************
// ログイン後ページ レイアウト
// ********************************************************************************

import { VFC, ReactNode } from "react";
import Head from "next/head";
import appConfig from "~/config/app";
import { TailwindUIHeader } from "~/components/organisms/header";

export type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: VFC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <TailwindUIHeader />
      <main className="container mx-auto text-center">{children}</main>
    </div>
  );
};

// ********************************************************************************
// ローディング レイアウト
// ********************************************************************************

import { VFC, ReactNode } from "react";
import appConfig from "~/config/app";
import Head from "next/head";

/** Template: フルスクリーンのローディングレイアウト */
export const FullScreenLoadingLayout: VFC = () => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <LoadingComponent />
    </>
  );
};

type LoadingOverlayLayout = {
  children: ReactNode;
  isLoading: boolean;
};

/** Template: オーバーレイタイプのローディングレイアウト */
export const LoadingOverlayLayout: VFC<LoadingOverlayLayout> = ({
  children,
  isLoading,
}) => {
  return (
    <>
      {isLoading && <LoadingComponent />}
      {children}
    </>
  );
};

const LoadingComponent: VFC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-600 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl">ロード中...</h2>
    </div>
  );
};

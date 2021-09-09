// ********************************************************************************
// ローディング レイアウト
// ********************************************************************************

import { VFC, ReactNode } from "react";
import Image from "next/image";
import loadingGifImage from "~/assets/img/loading.gif";
import appConfig from "~/config/app";
import Head from "next/head";

/** Template: フルスクリーンのローディングレイアウト */
export const FullScreenLoadingLayout: VFC = () => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <div className="fixed inset-0 bg-white opacity-70 z-50">
        <div className="w-screen h-screen grid justify-items-stretch justify-center content-center">
          <div className="text-center">
            <Image
              className="justify-self-center"
              src={loadingGifImage}
              width={50}
              height={50}
              alt="loading"
            />
            <p className="text-xl">ロード中</p>
          </div>
        </div>
      </div>
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
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-600 opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">
            ロード中
          </h2>
        </div>
      )}
      {children}
    </>
  );
};

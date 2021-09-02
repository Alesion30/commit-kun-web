// ********************************************************************************
// ローディング レイアウト
// ********************************************************************************

import { VFC, ReactNode } from "react";
import Image from "next/image";
import loadingGifImage from "~/assets/img/loading.gif";
import LoadingOverlay from "react-loading-overlay-ts";
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
    <LoadingOverlay
      className="h-screen"
      active={isLoading}
      spinner
      text="ロード中"
    >
      {children}
    </LoadingOverlay>
  );
};

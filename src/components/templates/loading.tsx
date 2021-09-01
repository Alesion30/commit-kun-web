// ********************************************************************************
// ローディング レイアウト
// ********************************************************************************

import { VFC } from "react";
import Image from "next/image";
import loadingGifImage from "~/assets/img/loading.gif";

export const FullScreenLoadingLayout: VFC = () => {
  return (
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
          <p className="text-xl">loading...</p>
        </div>
      </div>
    </div>
  );
};

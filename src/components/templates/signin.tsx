// ********************************************************************************
// ログインページ レイアウト
// ********************************************************************************

import { VFC } from "react";
import Image from "next/image";
import Head from "next/head";
import appConfig from "~/config/app";
import { LockClosedIcon } from "@heroicons/react/solid";
import fontTitle from "~/assets/img/font.png";
import fontSubTitle from "~/assets/img/font-sub.png";

export type SigninLayoutProps = {
  onClickGithubSignin: () => void;
};

export const SigninLayout: VFC<SigninLayoutProps> = ({
  onClickGithubSignin,
}) => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <main className="bg-gray-50 h-screen w-screen p-5">
        <div className="bg-signin h-full w-full flex flex-col items-center justify-center px-4">
          <div className="mb-10">
            <div>
              <Image src={fontSubTitle} alt="" />
            </div>
            <div>
              <Image src={fontTitle} alt="" />
            </div>
          </div>
          <button
            type="button"
            onClick={onClickGithubSignin}
            className="group relative w-96 flex justify-center py-4 px-8 border border-transparent text-xl font-bold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                aria-hidden="true"
              />
            </span>
            GitHubアカウントで始める
          </button>
        </div>
      </main>
    </>
  );
};

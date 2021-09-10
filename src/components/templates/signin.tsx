// ********************************************************************************
// ログインページ レイアウト
// ********************************************************************************

import { VFC } from "react";
import Image from "next/image";
import Head from "next/head";
import appConfig from "~/config/app";
import fontTitle from "~/assets/img/font.png";
import fontSubTitle from "~/assets/img/font-sub.png";
import GitHubIcon from "~/assets/img/github-brands.svg";

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
            className="group md:w-96 w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <div className="mr-5">
              <GitHubIcon className="h-10 w-10 text-gray-500 group-hover:text-gray-400" />
            </div>
            <span className="text-xl font-bold text-white">
              GitHubアカウントで始める
            </span>
          </button>
        </div>
      </main>
    </>
  );
};

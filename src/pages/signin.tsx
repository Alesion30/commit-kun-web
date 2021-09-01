// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { SigninLayout } from "~/components/templates/signin";
import { withoutAuth } from "~/hocs";
import { signInGithub } from "~/plugins/firebase";

const Signin: NextPage = () => {
  const onClickGithubSignin = () => {
    signInGithub().catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  return <SigninLayout onClickGithubSignin={onClickGithubSignin} />;
};

export default withoutAuth(Signin);

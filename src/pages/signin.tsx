// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { SigninLayout } from "~/components/templates/signin";
import { setGitHubToken } from "~/data/cookie";
import { withoutAuth } from "~/hocs";
import { useAuth } from "~/hooks";
import { signInGithub, credentialFromResultGitHub } from "~/plugins/firebase";

const Signin: NextPage = () => {
  const auth = useAuth();

  const onClickGithubSignin = () => {
    signInGithub()
      .then((result) => {
        // GitHubAPIのトークンをセット
        const credential = credentialFromResultGitHub(result);
        const token = credential.accessToken;
        auth.setGithubToken(token);
        setGitHubToken(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return <SigninLayout onClickGithubSignin={onClickGithubSignin} />;
};

export default withoutAuth(Signin);

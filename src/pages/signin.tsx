// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { SigninLayout } from "~/components/templates/signin";
import { setGitHubToken } from "~/data/cookie";
import { createUser, getUser, updateUser } from "~/data/remote/user";
import { withoutAuth } from "~/hocs";
import { useAuth } from "~/hooks";
import { signInGithub, credentialFromResultGitHub } from "~/plugins/firebase";
import { Octokit } from "octokit";

const Signin: NextPage = () => {
  const auth = useAuth();

  const onClickGithubSignin = () => {
    signInGithub()
      .then(async (result) => {
        // GitHubAPIのトークンをセット
        const credential = credentialFromResultGitHub(result);
        const token = credential.accessToken;
        auth.setGithubToken(token);
        setGitHubToken(token);

        try {
          // GitHub ユーザー情報
          const octokit = new Octokit({ auth: token });
          const githubUser = (await octokit.rest.users.getAuthenticated()).data;

          // Firebase ユーザー情報
          const user = result.user;
          const idToken = await user.getIdToken();

          // バックエンド ユーザー情報
          const backendUser = (await getUser(idToken)).data;

          if (!(backendUser && backendUser.userUid !== "")) {
            // ユーザー登録
            await createUser(
              {
                userName: githubUser.login,
                email: user.email,
                imageUrl: user.photoURL,
                accessToken: token,
              },
              idToken
            );
          } else {
            // ユーザー登録
            await updateUser(
              {
                userName: githubUser.login,
                email: user.email,
                imageUrl: user.photoURL,
                accessToken: token,
              },
              idToken
            );
          }
        } catch (err) {
          console.error(err);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return <SigninLayout onClickGithubSignin={onClickGithubSignin} />;
};

export default withoutAuth(Signin);

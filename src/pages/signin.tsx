// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { SigninLayout } from "~/components/templates/signin";
import { withoutAuth } from "~/hocs";

const Signin: NextPage = () => {
  return <SigninLayout />;
};

export default withoutAuth(Signin);

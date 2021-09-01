// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="text-4xl">ホーム画面</h1>
    </MainLayout>
  );
};

export default withAuth(Home);

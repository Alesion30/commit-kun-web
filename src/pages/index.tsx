// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="text-4xl">ホーム画面</h1>
    </MainLayout>
  );
};

export default Home;
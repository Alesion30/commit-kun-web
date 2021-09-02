// ********************************************************************************
// 友達一覧・招待画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";

const Friend: NextPage = () => {
  return (
    <MainLayout>
      <div className="mt-5 text-center">
        <h1>友達一覧・招待画面</h1>
      </div>
    </MainLayout>
  );
};

export default withAuth(Friend);

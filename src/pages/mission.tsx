// ********************************************************************************
// ミッション画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";

const Mission: NextPage = () => {
  return (
    <MainLayout>
      <div className="mt-5 text-center">
        <h1>aaa</h1>
      </div>
    </MainLayout>
  );
};

export default withAuth(Mission);

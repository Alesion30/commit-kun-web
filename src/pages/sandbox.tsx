// ********************************************************************************
// sandbox
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { Level } from "~/components/organisms/level";
import { Ranking } from "~/components/organisms/ranking";

const Sandbox: NextPage = () => {
  return (
    <MainLayout>
      <div className="flex" style={{ height: `calc(100vh - 4rem)` }}>
        <div className="flex-1">
          <Level level={20} progress={50} />
        </div>
        <div className="flex-1 p-10">
          <Ranking />
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Sandbox);

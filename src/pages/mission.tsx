// ********************************************************************************
// ミッション画面
// ********************************************************************************

import { NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { SimpleCard } from "~/components/organisms/card";
import { MissionCard } from "~/components/organisms/mission_card";
import { Tabs } from "~/components/molecules/tabs";

const Mission: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const TABS = ["デイリー", "ノーマル", "期間限定"];

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="mt-5 lg:w-4/5">
          <Tabs
            tabs={TABS}
            activeIndex={activeIndex}
            onClick={setActiveIndex}
          />
          <SimpleCard roundless>
            <div className="flex flex-col items-center">
              <div className="sm:mx-10 mx-1 sm:my-5 my-2 lg:w-4/5">
                <div className="mb-4">
                  <MissionCard title="10時間以上作業しよう" progress={100} />
                </div>
                <div className="mb-4">
                  <MissionCard
                    title="[朝活イベント] 午前中（AM7:00~AM11:59）の間に1時間以上作業しよう"
                    progress={45}
                  />
                </div>
                <div className="mb-4">
                  <MissionCard
                    title="[TypeScript強化月間] TypeScriptを50words以上書こう"
                    progress={75}
                  />
                </div>
              </div>
            </div>
          </SimpleCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Mission);

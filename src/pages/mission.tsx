// ********************************************************************************
// ミッション画面
// ********************************************************************************

import { NextPage } from "next";
import { useState, useEffect } from "react";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { SimpleCard } from "~/components/organisms/card";
import { MissionCard } from "~/components/organisms/mission_card";
import { Tabs } from "~/components/molecules/tabs";
import { MissionResponse } from "~/data/remote/mission";
import useMission from "~/hooks/mission";

const Mission: NextPage = () => {
  const mission = useMission();
  const [activeIndex, setActiveIndex] = useState<number>(0); // 0: daily, 1: normal
  const TABS = ["デイリー", "ノーマル"];

  // ミッション
  const [missions, setMissions] = useState<MissionResponse>([]);

  useEffect(() => {
    const run = async () => {
      setMissions([]);
      try {
        // デイリーミッション取得
        if (activeIndex === 0) {
          setMissions(mission.daily);
        }

        // ノーマルミッション取得
        if (activeIndex === 1) {
          setMissions(mission.normal);
        }
      } catch (err) {
        console.error(err);
      }
    };
    run();
  }, [activeIndex, mission.daily, mission.normal]);

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="mt-5 xl:w-4/5 w-full px-2">
          <Tabs
            tabs={TABS}
            activeIndex={activeIndex}
            onClick={setActiveIndex}
          />
          <SimpleCard roundless>
            <div className="flex flex-col items-center">
              <div className="sm:mx-10 mx-1 sm:my-5 my-2 px-2 w-full md:w-4/5">
                {missions.map((mission, index) => {
                  return (
                    <div
                      key={`mission_${index}`}
                      className="mb-4 animate-fade-in-up"
                    >
                      <MissionCard
                        title={mission.mission}
                        progress={mission.clearRate}
                        reward={`${mission.experiencePoint}Exp`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SimpleCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Mission);

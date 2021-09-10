// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { UserProfileCard } from "~/components/organisms/user_profile_card";
import { Ranking } from "~/components/organisms/ranking";
import { useEffect, useState } from "react";
import { useAuth } from "~/hooks";
import { getUserLevel } from "~/data/remote/user";
import { StatusCard } from "~/components/organisms/status_card";

const Home: NextPage = () => {
  let [level, setLevel] = useState({
    experiencePoint: 0,
    level: 0,
  });
  const auth = useAuth();
  const token = auth.fbIdToken;
  useEffect(() => {
    const getUserLevelAsync = async () => {
      const result = await getUserLevel(token);
      setLevel(result.data.todayLevel);
    };
    getUserLevelAsync();
  }, [token]);

  return (
    <MainLayout>
      <div className="container mx-auto text-center">
        <div className="flex lg:flex-row flex-col md:py-10 pt-5 pb-20 h-full justify-center">
          <div className="lg:flex-1 justify-center items-center">
            <UserProfileCard
              rank={0}
              level={level.level}
              experience={level.experiencePoint}
            />
            <div className="flex my-5">
              <div className="flex-auto mx-2">
                <StatusCard
                  title="作業時間"
                  label="TOTAL"
                  value={5}
                  unit="hour"
                  color="bg-blue-400"
                />
              </div>
              <div className="flex-auto mx-2">
                <StatusCard
                  title="コミット数"
                  label="TOTAL"
                  value={5}
                  color="bg-red-400"
                />
              </div>
            </div>
            <div className="flex my-5">
              <div className="flex-auto mx-2">
                <StatusCard
                  title="変更コード量"
                  label="TOTAL"
                  value={5}
                  unit="words"
                  color="bg-green-400"
                />
              </div>
              <div className="flex-auto mx-2">
                <StatusCard
                  title="PRレビュー数"
                  label="TOTAL"
                  value={5}
                  color="bg-yellow-400"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 p-10">
            <Ranking />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);

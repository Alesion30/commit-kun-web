// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
// import useLoading from "~/hooks/loading";
import { Level } from "~/components/organisms/level";
import { Ranking } from "~/components/organisms/ranking";
import { SimpleCard } from "~/components/organisms/card";
import { useEffect, useState } from "react";
import { useAuth } from "~/hooks";
import { getUserLevel } from "~/data/remote/user";

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
      <div className="container mx-auto md:py-10 py-20 text-center">
        <SimpleCard>
          <div className="flex lg:flex-row flex-col md:py-10 py-20 justify-center">
            <div className="lg:flex-1">
              <Level level={level.level} experience={level.experiencePoint} />
            </div>
            <div className="lg:flex-1 p-10">
              <Ranking />
            </div>
          </div>
        </SimpleCard>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);

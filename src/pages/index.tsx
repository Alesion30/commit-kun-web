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

const Home: NextPage = () => {
  // const { whileLoading } = useLoading();
  return (
    <MainLayout>
      <div className="container mx-auto md:py-10 py-20 text-center">
        <SimpleCard>
          <div className="flex md:py-10 py-20 justify-center lg:flex-row flex-col h-full">
            <div className="lg:flex-1">
              <Level level={20} progress={50} />
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

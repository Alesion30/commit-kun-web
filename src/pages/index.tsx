// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
// import useLoading from "~/hooks/loading";
import { Level } from "~/components/organisms/level";
import { Ranking } from "~/components/organisms/ranking";

const Home: NextPage = () => {
  // const { whileLoading } = useLoading();
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
    // <MainLayout>
    //   <div className="mt-5 text-center">
    //     <button
    //       className="px-2 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
    //       onClick={() => {
    //         whileLoading(async () => {
    //           // await setTimeout(() => { }, 2000);
    //           await new Promise((resolve) => setTimeout(resolve, 2000));
    //         });
    //       }}
    //     >
    //       loadingを開始
    //     </button>
    //   </div>
    // </MainLayout>
  );
};

export default withAuth(Home);

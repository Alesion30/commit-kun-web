// ********************************************************************************
// ホーム画面
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { UserProfileCard } from "~/components/organisms/user_profile_card";
import { Ranking } from "~/components/organisms/ranking";
import { StatusCard } from "~/components/organisms/status_card";
import { useRouter } from "next/router";
import useBasic from "~/hooks/basic";
import { round } from "~/utils";
import { useAuth } from "~/hooks";
import { useEffect, useState } from "react";
import { getRankings, RankingsResponse } from "~/data/remote/ranking";

const Home: NextPage = () => {
  // アクティビティ画面に遷移
  const router = useRouter();
  const onClickActivityPage = () => router.push("/activity");

  // ユーザー基本情報
  const { basicInfo, reload } = useBasic();

  // ユーザー基本情報 取得
  useEffect(() => {
    reload();
  }, [reload]);

  // トークン
  const auth = useAuth();
  const token = auth.fbIdToken;

  // ランキング情報
  const [rankings, setRankings] = useState<RankingsResponse>([]);
  useEffect(() => {
    const init = async () => {
      if (token) {
        const data = (await getRankings(token, 1)).data;
        setRankings(data);
      }
    };
    init();
  }, [token]);

  return (
    <MainLayout>
      <div className="container mx-auto text-center">
        <div className="flex lg:flex-row flex-col md:py-7 pt-5 pb-20 h-full justify-center">
          <div className="lg:flex-1 justify-center items-center">
            <UserProfileCard
              rank={basicInfo?.rank ?? 0}
              level={basicInfo?.level ?? 0}
              experience={basicInfo?.experiencePoint ?? 0}
            />
            <div className="flex my-5">
              <div className="flex-auto mx-2">
                <StatusCard
                  title="作業時間"
                  label="TOTAL"
                  value={round(basicInfo?.workTime)}
                  unit="hour"
                  color="bg-blue-400"
                  onClick={onClickActivityPage}
                  isBlack
                />
              </div>
              <div className="flex-auto mx-2">
                <StatusCard
                  title="コミット数"
                  label="TOTAL"
                  value={basicInfo?.commit}
                  color="bg-red-400"
                  onClick={onClickActivityPage}
                  isBlack
                />
              </div>
            </div>
            <div className="flex my-5">
              <div className="flex-auto mx-2">
                <StatusCard
                  title="変更コード量"
                  label="TOTAL"
                  value={basicInfo?.typeNum}
                  unit="words"
                  color="bg-green-400"
                  onClick={onClickActivityPage}
                  isBlack
                />
              </div>
              <div className="flex-auto mx-2">
                <StatusCard
                  title="PRレビュー数"
                  label="TOTAL"
                  value={basicInfo?.prComment}
                  color="bg-yellow-400"
                  onClick={onClickActivityPage}
                  isBlack
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 md:px-10 px-2 py-4">
            <Ranking rankings={rankings} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);

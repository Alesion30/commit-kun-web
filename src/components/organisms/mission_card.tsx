import { VFC } from "react";
import { SimpleCard } from "~/components/organisms/card";
import { ProgressBar } from "~/components/atoms/progress_bar";

type MissionCardProps = {
  title: string;
  /** 進捗度（0~100） */
  progress: number;
  /** 達成報酬 */
  reward: string;
};

/**
 * Organism: ミッションカード
 */
export const MissionCard: VFC<MissionCardProps> = ({
  title,
  progress,
  reward,
}) => {
  const isDone = progress >= 100;
  return (
    <SimpleCard>
      <div className="bg-gray-600">
        <p className="text-white text-lg px-4 py-2">{title}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex-grow">
          {/* 進行状況 */}
          <div className="hidden sm:block">
            <div className="mx-5 my-3 flex items-center">
              <p className="flex-none bg-blue-400 text-white rounded-2xl w-20 text-center text-sm py-2">
                進行状況
              </p>
              <div className="mx-3 flex-grow">
                <ProgressBar percentage={progress} />
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="mx-3 my-3 flex items-center">
              <p className="flex-none bg-blue-400 text-white rounded-2xl px-4 text-center text-sm py-2">
                進行状況: {progress}%
              </p>
            </div>
          </div>

          {/* 達成報酬 */}
          <div className="hidden sm:block">
            <div className="mx-5 my-3 flex items-center">
              <p className="bg-green-500 text-white rounded-2xl w-20 text-center text-sm py-2">
                達成報酬
              </p>
              <p className="text-md mx-4">{reward}</p>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="mx-3 my-3 flex items-center">
              <p className="bg-green-500 text-white rounded-2xl px-4 text-center text-sm py-2">
                達成報酬: {reward}
              </p>
            </div>
          </div>
        </div>
        <div className="my-2 mx-5">
          {isDone && (
            <button className="animate-pulse py-3 px-6 w-32 h-full text-white rounded-lg bg-red-400 hover:bg-red-500 shadow-lg block md:inline-block">
              達成済み
            </button>
          )}
          {!isDone && (
            <button className="py-3 px-6 w-32 h-full cursor-default text-white rounded-lg bg-gray-400 shadow-lg block md:inline-block">
              未達成
            </button>
          )}
        </div>
      </div>
    </SimpleCard>
  );
};

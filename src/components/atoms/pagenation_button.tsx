import { VFC } from "react";

type PagenationButtonProps = {
  /** 前へ */
  onClickPrev: () => void;
  /** 次へ */
  onClickNext: () => void;
};

/**
 * Atom: ページネーション切り替えボタン
 */
export const PagenationButton: VFC<PagenationButtonProps> = ({
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className="border rounded-lg px-1" style={{ paddingTop: 2 }}>
      <button
        type="button"
        onClick={onClickPrev}
        className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
      >
        <svg
          className="h-6 w-6 text-gray-500 inline-flex leading-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="border-r inline-flex h-6"></div>
      <button
        type="button"
        onClick={onClickNext}
        className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
      >
        <svg
          className="h-6 w-6 text-gray-500 inline-flex leading-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

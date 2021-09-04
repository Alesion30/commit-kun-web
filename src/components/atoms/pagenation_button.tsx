import { VFC } from "react";
import { classNames } from "~/utils";

type PagenationButtonProps = {
  /** 前へ */
  onClickPrev: () => void;
  /** 次へ */
  onClickNext: () => void;
  /** 前へ disabled */
  disabledPrev?: boolean;
  /** 次へ disabled */
  disabledNext?: boolean;
};

/**
 * Atom: ページネーション切り替えボタン
 */
export const PagenationButton: VFC<PagenationButtonProps> = ({
  onClickPrev,
  onClickNext,
  disabledPrev,
  disabledNext,
}) => {
  return (
    <div className="border rounded-lg px-1" style={{ paddingTop: 2 }}>
      <button
        type="button"
        onClick={disabledPrev ? undefined : onClickPrev}
        className={classNames(
          disabledPrev
            ? "cursor-default bg-gray-200"
            : "cursor-pointer transition ease-in-out duration-200 hover:bg-gray-200",
          "leading-none rounded-lg inline-flex p-1 items-center mr-1"
        )}
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
        onClick={disabledNext ? undefined : onClickNext}
        className={classNames(
          disabledNext
            ? "cursor-default bg-gray-200"
            : "cursor-pointer transition ease-in-out duration-200 hover:bg-gray-200",
          "leading-none rounded-lg inline-flex p-1 items-center ml-1"
        )}
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

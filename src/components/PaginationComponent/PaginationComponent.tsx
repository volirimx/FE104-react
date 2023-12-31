import React, { useMemo } from "react";

type PaginationComponentProps = {
  allPagesCount: number;
  currentPageNumber: number;
  handlePageClick: (pageNumber: number) => void;
};

const generateNumbersArrayByLimit = (limit: number) => {
  const numbersArray: number[] = [];
  for (let i = 1; i <= limit; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
};

export const PaginationComponent = React.memo(
  ({
    allPagesCount,
    handlePageClick,
    currentPageNumber,
  }: PaginationComponentProps) => {
    const pagesArray = useMemo(
      () => generateNumbersArrayByLimit(allPagesCount),
      [allPagesCount]
    );

    const shouldShowPage = (page: number) => {
      if (page - currentPageNumber < 4 && page - currentPageNumber >= 0) {
        return true;
      }
      if (currentPageNumber - page < 4 && currentPageNumber - page >= 0) {
        return true;
      }
      if (page === 1 || page === allPagesCount) {
        return true;
      }
      return false;
    };

    return (
      <div className="flex flex-wrap m-auto justify-center gap-3 max-w-[600px] ">
        {pagesArray.map((page, index) =>
          shouldShowPage(page) ? (
            <>
              <div
                key={page}
                className={`p-[4px]  text-white rounded-[5px] cursor-pointer ${
                  currentPageNumber === page ? "bg-green-500" : "bg-[red]"
                }`}
                onClick={() => {
                  handlePageClick(page);
                }}
              >
                {page}
              </div>
            </>
          ) : null
        )}
      </div>
    );
  }
);

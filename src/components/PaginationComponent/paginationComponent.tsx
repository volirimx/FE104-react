import React, { useMemo } from "react";

type PaginationComponentProps = {
  allPagesCount: number;
  currentPageNumber: number;
  handlePageClick: (pageNumber: number) => void;
};

const generateNumbersArrayByLimits = (limit: number) => {
  const numberArray: number[] = [];
  for (let i = 1; i <= limit; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

export const PaginationComponent = React.memo(
  ({
    allPagesCount,
    handlePageClick,
    currentPageNumber,
  }: PaginationComponentProps) => {
    const pageArray = useMemo(
      () => generateNumbersArrayByLimits(allPagesCount),
      [allPagesCount]
    );
    return (
      <div className="flex flex-wrap m-auto justify-center gap-3 max-w-[600px]">
        {pageArray.map((page) => (
          <div
            key={page}
            className={`p-[4px] text-white rounded-[5px] cursor-pointer ${
              currentPageNumber === page ? "bg-green-500" : "bg-[red]"
            }`}
            onClick={() => {
              handlePageClick(page);
            }}
          >
            {page}
          </div>
        ))}
      </div>
    );
  }
);

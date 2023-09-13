import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchCharacters,
  selectAllCharacters,
} from "../redux/character/character";
import { PaginationComponent } from "../components/PaginationComponent/PaginationComponent";
import { useSearchParams } from "react-router-dom";

export const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const charactersObject = useAppSelector(selectAllCharacters);

  useEffect(() => {
    const stringParams = searchParams.toString();

    if (!stringParams.length) {
      setSearchParams("page=1");
    } else {
      dispatch(fetchCharacters(searchParams.toString()));
    }
  }, [searchParams]);

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      setSearchParams((prevState) => {
        prevState.set("page", pageNumber.toString());
        return prevState;
      });
    },
    [setSearchParams]
  );

  const currentPage = useMemo(() => {
    const currentPageFromParams = searchParams.get("page");
    if (currentPageFromParams) {
      return parseInt(currentPageFromParams);
    } else {
      return 1;
    }
  }, [searchParams]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      if (!e.target.value.length) {
        prevParams.delete("name");
      } else {
        prevParams.set("name", e.target.value);
        prevParams.set("page", "1");
      }
      return prevParams;
    });
  };

  return (
    <div>
      <div>
        <input
          onChange={handleSearchInputChange}
          placeholder="enter search value"
          className="w-[400px] h-[70px] outline-none ml-[40px] border-black border-l-[2px] border-b-[2px] border-r-[2px] border-t-[2px]"
        />
      </div>

      <div className="flex flex-col max-w-[400px] p-[20px] gap-3">
        {charactersObject.results.map((character) => {
          return <div key={character.id}>{character.name}</div>;
        })}
      </div>
      <div>
        <PaginationComponent
          handlePageClick={handlePageClick}
          allPagesCount={charactersObject.info.pages}
          currentPageNumber={currentPage}
        />
      </div>
    </div>
  );
};

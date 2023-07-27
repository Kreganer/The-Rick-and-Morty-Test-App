import { checkAvaliableDirection, correctPagination, createPagesArray } from 'src/utils/pages';
import { useMemo } from 'react';
import {
  PaginationButton,
  PaginationCurrentPageButton,
  PaginationWrapper
} from 'src/components/Pagination/style';
import { StyledSpan } from 'src/UI/style';

const Pagination = ({ charactersData, changePage, page, pagesCount }) => {
  const pagesArray = useMemo(() => createPagesArray(pagesCount), [pagesCount]);

  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => changePage(Number(page) - 1)}
        disabled={checkAvaliableDirection(charactersData, 'prev')}>
        &lt;
      </PaginationButton>
      {correctPagination(Number(page), pagesArray).map((pageNum) => {
        if (pageNum.range)
          return (
            <StyledSpan key={pageNum.key} style={{ color: '#fff' }}>
              ...
            </StyledSpan>
          );
        else if (Number(page) === pageNum) {
          return (
            <PaginationCurrentPageButton disabled key={pageNum}>
              {pageNum}
            </PaginationCurrentPageButton>
          );
        } else
          return (
            <PaginationButton onClick={() => changePage(pageNum)} key={pageNum}>
              {pageNum}
            </PaginationButton>
          );
      })}
      <PaginationButton
        onClick={() => changePage(Number(page) + 1)}
        disabled={checkAvaliableDirection(charactersData, 'next')}>
        &gt;
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;

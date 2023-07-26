export const getPagesCount = (pagesCount, characterCount) => {
  console.log(Math.ceil(pagesCount / characterCount));
  return Math.ceil(pagesCount / characterCount);
};

export const createPagesArray = (pagesCount) => {
  let pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  return pages;
};

export const correctPagination = (page, pageArray) => {
  let correctOutput = [];
  const pagesArrayStart = pageArray.slice(0, 3);
  const pagesArrayEnd = pageArray.slice(-3);

  if (pagesArrayStart.includes(page) || pagesArrayEnd.includes(page)) {
    correctOutput.push(pagesArrayStart);
    correctOutput.push({ range: '...', key: 'rangeOne' });
    correctOutput.push(pagesArrayEnd);
  } else {
    let pagesArrayMiddle = pageArray.slice(page - 2, page + 1);
    correctOutput.push(pageArray.slice(0, 1));
    correctOutput.push({ range: '...', key: 'rangeFirst' });
    correctOutput.push(pagesArrayMiddle);
    correctOutput.push({ range: '...', key: 'rangeSecond' });
    correctOutput.push(pageArray.slice(-1));
  }

  return correctOutput.flat(1);
};

export const checkAvaliableDirection = (data, string) => {
  switch (string) {
    case 'next':
      if (data?.info.next) return false;
      else return true;
    case 'prev':
      if (data?.info.prev) return false;
      else return true;
  }
};

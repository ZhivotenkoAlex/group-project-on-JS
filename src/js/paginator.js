import refs from './get-refs.js';

import pagTmp from '../templates/pagination-tmp.hbs';
import pagTmp20 from '../templates/paginator-20-tmp.hbs';

import PagTest from './apiPaginator';

const PER_PAGE = 20;

// const pagination = require('pagination');

export default function setPaginatorStart(currentPage, totalPages, url = '/') {
  // const boostrapPaginator = new pagination.TemplatePaginator(
  //   paginatotInit(currentPage, totalPages),
  // );
  // console.log(boostrapPaginator.preparePreLink('prelinkABC'));
  // console.log(boostrapPaginator.getPaginationData());
  // console.log(Object.values(boostrapPaginator));
  // console.log(Object.keys(boostrapPaginator));
  const paginator = new PagTest({
    currentPage: currentPage,
    prelink: url,
    totalPages: totalPages,
    templateTmp: pagTmp,
    perPage: PER_PAGE,
  });

  refs.paginatorElRef.innerHTML = paginator.render();
}

// function paginatotInit(currentPage, totalPages) {
//   const paginatorObj = {
//     prelink: '/?pag',
//     current: currentPage,
//     rowsPerPage: PER_PAGE,
//     totalResult: totalPages,
//     slashSeparator: false,
//     template: totalPages > PER_PAGE * 5 ? pagTmp : pagTmp20,
//   };
//   return paginatorObj;
// }

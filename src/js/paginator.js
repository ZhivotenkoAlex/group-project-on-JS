console.log('pagination start');

import pagTmp from '../templates/pagination-tmp.hbs';

var pagination = require('pagination');

var boostrapPaginator = new pagination.TemplatePaginator({
  prelink: '/',
  current: 12,
  rowsPerPage: 200,
  totalResult: 10020,
  slashSeparator: true,
  template: pagTmp,
});

const pageNumEl = document.querySelector('.js-pagination');

pageNumEl.innerHTML = boostrapPaginator.render();

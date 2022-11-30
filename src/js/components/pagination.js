import Pagination from 'tui-pagination';
// import refs from '../services/refs';
import spriteIcons from '../../images/spriteIcons.svg';
// import { getMovies } from '../components/getMovies';

const arrowIcon = `${spriteIcons}#icon-arrow`;
const dotsIcon = `${spriteIcons}#icon-dots`;

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  usageStatistics: false,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
      `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
      `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);

// console.log(pagination);

// pagination.on('afterMove', getMovies());

// export default pagination;

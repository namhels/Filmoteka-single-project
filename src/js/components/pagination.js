import Pagination from 'tui-pagination';
import spriteIcons from '../../images/spriteIcons.svg';
import apiThemoviedb from '../api/apiThemoviedb';
import { renderMovies } from '../components/getMovies';

const api = new apiThemoviedb();

const paginationActive = (results, page, totalItems) => {
  const arrowIcon = `${spriteIcons}#icon-arrow`;
  const dotsIcon = `${spriteIcons}#icon-dots`;

  const options = {
    totalItems,
    itemsPerPage: results.length,
    visiblePages: 5,
    page,
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

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    api.page = currentPage;
    const { results } = await api.getTrendingMovies();
    renderMovies(results);
  });
};

export default paginationActive;

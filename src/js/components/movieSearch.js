import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
import paginationActive from '../components/pagination';
import { handleError, renderMovies } from '../components/getMovies';
import { onError } from '../components/library';

const api = new apiThemoviedb();

const onFormSearch = async e => {
  e.preventDefault();
  const inputValue = e.target.searchQuery.value.trim();
  if (!inputValue) {
    onError('Enter the correct movie name');
    return;
  }
  api.resetPage();
  api.query = inputValue;

  try {
    const { results, page, total_results: totalItems } = await api.movieSearch();

    refs.pagination.classList.remove('visually-hidden');
    const OnPagination = async ({ page }) => {
      api.page = page;
      const { results } = await api.movieSearch();
      renderMovies(results);
    };
    paginationActive(results, page, totalItems, OnPagination);

    renderMovies(results);

    if (!results.length) {
      refs.pagination.classList.add('visually-hidden');
      onError('Enter the correct movie name');
      return;
    }
  } catch (error) {
    handleError(error);
  }
  e.target.searchQuery.value = '';
};

refs.formHeader.addEventListener('submit', onFormSearch);

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
    // refs.pagination.classList.remove('visually-hidden');
    // paginationActive(results, page, totalItems);
    renderMovies(results);

    if (!results.length) {
      onError('Enter the correct movie name');
      return;
    }
  } catch (error) {
    handleError(error);
  }
  e.target.searchQuery.value = '';
};

refs.formHeader.addEventListener('submit', onFormSearch);

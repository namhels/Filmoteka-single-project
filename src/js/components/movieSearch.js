import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
import { handleError, renderMovies } from '../components/getMovies';
import { onError } from '../components/library';

const api = new apiThemoviedb();
// let inputValue = '';
// let totalPages = 0;

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
    const {
      results,
      page,
      total_pages: totalPages,
      total_results: totalResults,
    } = await api.movieSearch();
    if (!results.length) {
      onError('Enter the correct movie name');
      return;
    }
    renderMovies(results);
  } catch (error) {
    handleError(error);
  }
  e.target.searchQuery.value = '';
};

refs.formHeader.addEventListener('submit', onFormSearch);

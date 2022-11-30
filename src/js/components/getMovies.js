import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
// import pagination from '../components/pagination';
import { moviesMarkup } from '../templates/moviesMarkup';

const api = new apiThemoviedb();

const getMovies = async () => {
  try {
    const { results, page, total_pages: totalPages } = await api.getTrendingMovies();
    renderMovies(results);
  } catch (error) {
    handleError(error);
  }
};

const handleError = err => {
  refs.films.innerHTML = '';
  refs.films.classList.remove('films');
  refs.error.classList.add('error');
  refs.error.textContent = err.message;
};

const renderMovies = movies => {
  refs.error.textContent = '';
  refs.films.classList.add('films');
  refs.error.classList.remove('error', 'no-movies');
  refs.films.innerHTML = moviesMarkup(movies);
};

setTimeout(() => {
  getMovies();
}, 100);

// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   console.log(currentPage);
// });

export { getMovies, handleError, renderMovies };

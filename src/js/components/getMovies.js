import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
import moviesMarkup from '../templates/moviesMarkup';

const api = new apiThemoviedb({ endpoint: 'trending/movie/day' });

// api.fetchMovies();

const getMovies = async () => {
  try {
    const { results, page, total_pages: totalPages } = await api.fetchMovies();
    renderMovies(results);
  } catch (error) {
    handleError(error);
  }
};

const handleError = err => {
  refs.films.innerHTML = '';
  refs.error.textContent = err.message;
};

const renderMovies = movies => {
  refs.error.textContent = '';
  refs.films.insertAdjacentHTML('beforeend', moviesMarkup(movies));
};

getMovies();

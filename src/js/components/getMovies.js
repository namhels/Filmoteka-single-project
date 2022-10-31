import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
import moviesMarkup from '../templates/moviesMarkup';
import { save } from '../services/localStorage';

const api = new apiThemoviedb({ endpoint: 'trending/movie/day' });

// api.fetchMovies();

const getMovies = async () => {
  try {
    const { results, page, total_pages: totalPages } = await api.fetchMovies();
    refs.films.classList.add('films');
    refs.error.classList.remove('error');
    renderMovies(results);
    save('movies', results);
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
  refs.films.insertAdjacentHTML('beforeend', moviesMarkup(movies));
};

getMovies();

export { handleError };

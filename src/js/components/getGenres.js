import apiThemoviedb from '../api/apiThemoviedb';
import refs from '../services/refs';
import { handleError } from '../components/getMovies';
import { save } from '../services/localStorage';

const api = new apiThemoviedb({ endpoint: 'genre/movie/list' });

const getGenres = async () => {
  try {
    const genres = await api.fetchMovies();
    refs.films.classList.add('films');
    refs.error.classList.remove('error');
    save('genre', genres);
  } catch (error) {
    handleError(error);
  }
};

getGenres();

export default getGenres;

import apiThemoviedb from '../api/apiThemoviedb';
import { handleError } from '../components/getMovies';
import { save } from '../services/localStorage';

const api = new apiThemoviedb();

const saveGenres = async () => {
  try {
    const genres = await api.getGenres();
    save('genre', genres);
  } catch (error) {
    handleError(error);
  }
};

saveGenres();

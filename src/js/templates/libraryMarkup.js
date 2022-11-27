import notFoundImg from '../../images/not_found_ver.jpg';
import { makeMoviesMarkup } from '../templates/moviesMarkup';

const libraryMarkup = movies =>
  movies
    .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
      const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;

      const genre = genres.map(el => ` ${el.name}`);

      const year = new Date(release_date).getFullYear();
      const vote = vote_average.toFixed(1);

      return makeMoviesMarkup({ id, poster, title, genre, year, vote });
    })
    .join('');

export default libraryMarkup;

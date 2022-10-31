import notFoundImg from '../../images/not_found_ver.jpg';
import { get } from '../services/localStorage';

const moviesMarkup = movies =>
  movies
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;
      const genreArr = get('genre').genres;

      const genre = genreArr.filter(el => genre_ids.includes(el.id)).map(e => ` ${e.name}`);
      // const genre = genreArr.reduce(
      //   (acc, el) => (genre_ids.includes(el.id) ? [...acc, el.name] : acc),
      //   [],
      // );
      const year = new Date(release_date).getFullYear();
      const vote = vote_average.toFixed(1);

      return makeMoviesMarkup({ poster, title, genre, year, vote });
    })
    .join('');

const makeMoviesMarkup = ({ poster, title, genre, year, vote }) =>
  `
    <li class="films__item">
      <img class="films__image" src="${poster}" alt="${title}" loading="lazy" />
      <h2 class="films__title">${title}</h2>
      <div class="films__wrapper-data">
        <p class="films__genre">${genre}</p>
        <p class="films__year"><span class="films__year-span">| </span>${year}</p>
        <p class="films__rating">${vote}</p>
      </div>
    </li>`;

export default moviesMarkup;

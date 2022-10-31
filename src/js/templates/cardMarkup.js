import notFoundImg from '../../images/not_found_ver.jpg';
import { get } from '../services/localStorage';

const cardMarkup = movies =>
  movies
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        vote_average,
        vote_count: voteCount,
        popularity,
        original_title: originalTitle,
      }) => {
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;

        const genreArr = get('genre').genres;
        const genre = genreArr.filter(el => genre_ids.includes(el.id)).map(e => ` ${e.name}`);
        // const genre = genreArr.reduce(
        //   (acc, el) => (genre_ids.includes(el.id) ? [...acc, el.name] : acc),
        //   [],
        // );

        const voteAverage = vote_average.toFixed(1);

        return makeCardMarkup({
          poster,
          title,
          genre,
          voteAverage,
          voteCount,
          popularity,
          originalTitle,
        });
      },
    )
    .join('');

const makeCardMarkup = ({
  poster,
  title,
  genre,
  voteAverage,
  voteCount,
  popularity,
  originalTitle,
  overview,
}) =>
  `<div class="card__image-wrapper">
      <img class="card__image" src="${poster}" alt="${title}" loading="lazy" />
    </div>
    <div class="card__content">
      <h1 class="card__title">${title}</h1>

      <table class="card__film-specification">
        <tr class="card__film-characteristics">
          <td class="card__film-point">Vote / Votes</td>
          <td class="card__film-data"><span class="card__film-data-label">${voteAverage}</span>${voteCount}</td>
        </tr>
        <tr class="card__film-characteristics">
          <td class="card__film-point">Popularity</td>
          <td class="card__film-data">${popularity}</td>
        </tr>
        <tr class="card__film-characteristics">
          <td class="card__film-point">Original Title</td>
          <td class="card__film-data">${originalTitle}</td>
        </tr>
        <tr class="card__film-characteristics">
          <td class="card__film-point">Genre</td>
          <td class="card__film-data">${genre}</td>
        </tr>
      </table>

      <h2 class="card__film-write-up">about</h2>
      <p class="card__film-description">${overview}</p>`;

export default cardMarkup;

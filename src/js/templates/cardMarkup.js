import notFoundImg from '../../images/not_found_ver.jpg';

const cardMarkup = film => {
  const {
    poster_path,
    title,
    genres,
    vote_average,
    vote_count: voteCount,
    popularity,
    original_title: originalTitle,
    overview,
  } = film;

  const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;
  const genresName = genres.map(el => ` ${el.name}`);
  const voteAverage = vote_average.toFixed(1);

  return `<div class="card__image-wrapper">
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
          <td class="card__film-data">${genresName}</td>
        </tr>
      </table>

      <h2 class="card__film-write-up">about</h2>
      <p class="card__film-description">${overview}</p>

      <ul class="buttons card__buttons">
        <li class="buttons__item card__buttons-item">
          <button
            class="button card__button card__button--on"
            type="button"
            data-btn="change watched"
          >
            add to watched
          </button>
        </li>
        <li class="buttons__item card__buttons-item">
          <button
            class="button card__button card__button--on"
            type="button"
            data-btn="change queue"
          >
            add to queue
          </button>
        </li>
      </ul>
    </div>`;
};

export default cardMarkup;

import notFoundImg from '../../images/not_found_ver.jpg';

const moviesMarkup = movies =>
  movies
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;
      const genre = genre_ids;
      const year = new Date(release_date).getFullYear();
      const vote = vote_average.toFixed(1);

      return moviesCards({ poster, title, genre, year, vote });
    })
    .join('');

const moviesCards = ({ poster, title, genre, year, vote }) => `
    <li class="films__item">
      <img class="films__image" src="${poster}" alt="${title}" loading="lazy" />
      <h2 class="films__title">${title}</h2>
      <div class="films__wrapper-data">
        <p class="films__genre">${genre} |</p>
        <p class="films__year">${year}</p>
        <p class="films__rating">${vote}</p>
      </div>
    </li>`;

export default moviesMarkup;

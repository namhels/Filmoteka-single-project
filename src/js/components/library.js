import refs from '../services/refs';
import libraryMarkup from '../templates/libraryMarkup';
import { get } from '../services/localStorage';

const onWatched = () => {
  const watched = get('watched');
  const queue = get('queue');
  refs.quantityQueue.textContent = queue.length;
  refs.quantityWatched.textContent = watched.length;
  refs.watched.classList.replace('button--off', 'button--on');
  refs.queue.classList.add('button--off');
  if (!watched || !watched.length) {
    onError('sorry no movies added');
  } else {
    refs.pagination.classList.add('visually-hidden');
    renderMovies(watched);
  }
};

const onQueue = () => {
  const queue = get('queue');
  refs.quantityQueue.textContent = queue.length;
  refs.queue.classList.replace('button--off', 'button--on');
  refs.watched.classList.add('button--off');
  if (!queue || !queue.length) {
    onError('sorry no movies added');
  } else {
    renderMovies(queue);
  }
};

const renderMovies = movies => {
  refs.error.textContent = '';
  refs.error.classList.remove('error', 'no-movies');
  refs.films.classList.add('films');
  refs.films.innerHTML = libraryMarkup(movies);
};

const onError = textError => {
  refs.films.innerHTML = '';
  refs.films.classList.remove('films');
  refs.error.classList.add('error', 'no-movies');
  refs.error.textContent = textError;
};

refs.watched.addEventListener('click', onWatched);
refs.queue.addEventListener('click', onQueue);

export { onWatched, onQueue, onError };

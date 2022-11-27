import { get } from '../services/localStorage';
import {
  saveUniqueArrayItemToStorage,
  deleteArrayItemFromStorage,
} from '../services/objInLocalStorage';

const onChangeWatchedQueue = film => {
  const ref = {
    changeWatched: document.querySelector('[data-btn="change watched"]'),
    changeQueue: document.querySelector('[data-btn="change queue"]'),
  };

  const watched = get('watched');
  if (!watched || !watched.some(el => el.id === film.id)) {
    ref.changeWatched.classList.add('card__button--on');
  } else {
    ref.changeWatched.textContent = 'REMOVE TO WATCHED';
    ref.changeWatched.classList.remove('card__button--on');
  }
  const onChangeWatched = () => {
    const watched = get('watched');
    if (!watched || !watched.some(el => el.id === film.id)) {
      saveUniqueArrayItemToStorage('watched', film);
      ref.changeWatched.textContent = 'REMOVE TO WATCHED';
      ref.changeWatched.classList.remove('card__button--on');
      deleteFilmFromQueue();
    } else {
      deleteFilmFromWatched();
    }
  };

  const queue = get('queue');
  if (!queue || !queue.some(el => el.id === film.id)) {
    ref.changeQueue.classList.add('card__button--on');
  } else {
    ref.changeQueue.textContent = 'REMOVE TO QUEUE';
    ref.changeQueue.classList.remove('card__button--on');
  }
  const onChangeQueue = () => {
    const queue = get('queue');
    if (!queue || !queue.some(el => el.id === film.id)) {
      saveUniqueArrayItemToStorage('queue', film);
      ref.changeQueue.textContent = 'REMOVE TO QUEUE';
      ref.changeQueue.classList.remove('card__button--on');
      deleteFilmFromWatched();
    } else {
      deleteFilmFromQueue();
    }
  };

  const deleteFilmFromWatched = () => {
    deleteArrayItemFromStorage('watched', film);
    ref.changeWatched.textContent = 'ADD TO WATCHED';
    ref.changeWatched.classList.add('card__button--on');
  };
  const deleteFilmFromQueue = () => {
    deleteArrayItemFromStorage('queue', film);
    ref.changeQueue.textContent = 'ADD TO QUEUE';
    ref.changeQueue.classList.add('card__button--on');
  };

  ref.changeWatched.addEventListener('click', onChangeWatched);
  ref.changeQueue.addEventListener('click', onChangeQueue);
};

export { onChangeWatchedQueue };

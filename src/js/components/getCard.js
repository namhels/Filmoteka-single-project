import refs from '../services/refs';
import apiThemoviedb from '../api/apiThemoviedb';
import cardMarkup from '../templates/cardMarkup';
import { handleError } from '../components/getMovies';
import { onChangeWatchedQueue } from '../components/watchedQueue';
import { TrailerModal } from '../components/trailerModal';
// import { renderMovies } from '../components/library';

const api = new apiThemoviedb();

const onCardOpen = async e => {
  // e.target.tagName === 'LI'
  if (e.target === e.currentTarget) {
    return;
  }

  const cardRef = e.target.closest('.films__item');
  api.id = Number(cardRef.dataset.id);

  try {
    const film = await api.getMovie();
    refs.error.classList.remove('error');
    renderCard(film);
    refs.backdrop.classList.remove('is-hidden');
    onChangeWatchedQueue(film);
    TrailerModal();
  } catch (error) {
    handleError(error);
  }

  window.addEventListener('keydown', onEscapePress);
  refs.backdrop.addEventListener('click', onBackdropClose);
};

const renderCard = film => {
  refs.error.textContent = '';
  refs.card.innerHTML = cardMarkup(film);
};

const onCardClose = () => {
  const trailerRef = document.querySelector('.trailer');
  if (trailerRef.classList.contains('is-open')) {
    trailerRef.classList.remove('is-open');
    return;
  }

  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscapePress);
  refs.backdrop.removeEventListener('click', onBackdropClose);
};

const onEscapePress = e => {
  if (e.code === 'Escape') {
    onCardClose();
  }
};

const onBackdropClose = e => {
  if (e.target === e.currentTarget) {
    onCardClose();
  }
};

refs.films.addEventListener('click', onCardOpen);
refs.card__close.addEventListener('click', onCardClose);

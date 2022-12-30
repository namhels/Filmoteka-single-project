import refs from '../services/refs';

const onDevModal = () => {
  refs.devBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscapePress);
  refs.devBackdrop.addEventListener('click', onBackdropClose);
};

const onCardClose = () => {
  refs.devBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscapePress);
  refs.devBackdrop.removeEventListener('click', onBackdropClose);
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

refs.footerText.addEventListener('click', onDevModal);

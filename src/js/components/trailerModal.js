const TrailerModal = () => {
  const ref = {
    trailerBtn: document.querySelector('[data-btn="change trailer"]'),
    trailer: document.querySelector('.trailer'),
  };

  const onTrailer = () => {
    ref.trailer.classList.add('is-open');
    window.addEventListener('keydown', onEscapePress);
  };

  ref.trailerBtn.addEventListener('click', onTrailer);
};

export { TrailerModal };

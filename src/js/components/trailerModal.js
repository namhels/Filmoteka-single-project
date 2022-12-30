const trailerModal = () => {
  const ref = {
    trailerBtn: document.querySelector('[data-btn="change trailer"]'),
    trailer: document.querySelector('.trailer'),
  };

  const onTrailer = () => {
    ref.trailer.classList.add('is-open');
  };

  ref.trailerBtn.addEventListener('click', onTrailer);
};

export { trailerModal };

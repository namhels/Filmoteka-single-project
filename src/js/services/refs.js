const refs = {
  header: document.querySelector('.header'),
  home: document.querySelector('.nav-list__item--home'),
  library: document.querySelector('.nav-list__item--library'),

  formHeader: document.querySelector('.header-form__wrapper'),
  btnHeader: document.querySelector('.header__buttons'),

  films: document.querySelector('.films'),
  error: document.querySelector('.error'),
  films__item: document.querySelector('.films__item'),

  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  card: document.querySelector('.card'),
  card__close: document.querySelector('.card__close'),
  card__button: document.querySelector('.card__button'),

  watched: document.querySelector('[data-btn="watched"]'),
  queue: document.querySelector('[data-btn="queue"]'),

  pagination: document.querySelector('.tui-pagination'),

  devBackdrop: document.querySelector('.dev-backdrop'),
  footerText: document.querySelector('.footer__item--dev'),
};

export default refs;

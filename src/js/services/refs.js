const refs = {
  header: document.querySelector('.header'),
  home: document.querySelector('.nav-list__item--home'),
  library: document.querySelector('.nav-list__item--library'),

  formHeader: document.querySelector('.header-form__wrapper'),
  formError: document.querySelector('.header-form__error-text'),
  btnHeader: document.querySelector('.header__buttons'),

  films: document.querySelector('.films'),
  error: document.querySelector('.error'),

  card: document.querySelector('.card'),
  card__close: document.querySelector('.card__close'),
  card__button: document.querySelector('.card__button'),
  card__close: document.querySelector('[data-btn="add to watched"]'),
  card__close: document.querySelector('[data-btn="add to queue"]'),
};

export default refs;

const refs = {
  header: document.querySelector('.header'),
  home: document.querySelector('.nav-list__item--home'),
  library: document.querySelector('.nav-list__item--library'),

  formHeader: document.querySelector('.header-form__wrapper'),
  formError: document.querySelector('.header-form__error-text'),
  btnHeader: document.querySelector('.header__buttons'),
};

const onHomeBtn = () => {
  refs.header.classList.remove('header--library');
  refs.btnHeader.classList.add('visually-hidden');
  refs.formHeader.classList.remove('visually-hidden');
  refs.formError.classList.remove('visually-hidden');
  refs.btnHeader.classList.remove('header--library');
  refs.home.classList.add('nav-list__item--current');
  refs.library.classList.remove('nav-list__item--current');
};

const onLibraryBtn = () => {
  refs.header.classList.add('header--library');
  refs.btnHeader.classList.remove('visually-hidden');
  refs.formHeader.classList.add('visually-hidden');
  refs.formError.classList.add('visually-hidden');
  refs.library.classList.add('nav-list__item--current');
  refs.home.classList.remove('nav-list__item--current');
};

const onChangeHeader = () => {
  onHomeBtn();
  onLibraryBtn();
};

refs.home.addEventListener('click', onHomeBtn);
refs.library.addEventListener('click', onLibraryBtn);

export default onChangeHeader;

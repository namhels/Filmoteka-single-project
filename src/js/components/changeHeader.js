import refs from '../services/refs';
import { getMovies } from '../components/getMovies';
import { onWatched } from '../components/library';

const onHomeBtn = () => {
  getMovies();
  refs.header.classList.remove('header--library');
  refs.btnHeader.classList.add('visually-hidden');
  refs.formHeader.classList.remove('visually-hidden');
  refs.btnHeader.classList.remove('header--library');
  refs.home.classList.add('nav-list__item--current');
  refs.library.classList.remove('nav-list__item--current');
};

const onLibraryBtn = () => {
  onWatched();
  refs.header.classList.add('header--library');
  refs.btnHeader.classList.remove('visually-hidden');
  refs.formHeader.classList.add('visually-hidden');
  refs.library.classList.add('nav-list__item--current');
  refs.home.classList.remove('nav-list__item--current');
};

refs.home.addEventListener('click', onHomeBtn);
refs.library.addEventListener('click', onLibraryBtn);

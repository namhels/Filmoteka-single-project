import axios from 'axios';

// Ключ API(v3 auth): 308f19df2a761157194efc58109ee68d

// Ключ доступа к API(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDhmMTlkZjJhNzYxMTU3MTk0ZWZjNTgxMDllZTY4ZCIsInN1YiI6IjYzNTNkMDYwNGNhNjc2MDA4MjVjYjczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jNU4Cgs9eD0B3oKicejlsIFDcPGthLO_Sfgpz1TvLl0

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class apiThemoviedb {
  #API_KEY = '308f19df2a761157194efc58109ee68d';
  #page = 1;
  #query;
  #id;

  fetchMovies = async (endpoint, params = '') => {
    const { data } = await axios.get(`${endpoint}?${params}`);
    return data;
  };

  getTrendingMovies = () => {
    const endpoint = '/trending/movie/day';
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      page: this.#page,
    });
    return this.fetchMovies(endpoint, params);
  };

  movieSearch = () => {
    const endpoint = '/search/movie';
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      query: this.#query,
      page: this.#page,
      include_adult: false,
    });
    return this.fetchMovies(endpoint, params);
  };

  getMovie = () => {
    const endpoint = `/movie/${this.#id}`;
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      append_to_response: 'videos',
    });
    return this.fetchMovies(endpoint, params);
  };

  getGenres = () => {
    const endpoint = '/genre/movie/list';
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
    });
    return this.fetchMovies(endpoint, params);
  };

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  get page() {
    return this.#page;
  }
  set page(newPage) {
    this.#page = newPage;
  }
  get query() {
    return this.#query;
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
  get id() {
    return this.#id;
  }
  set id(newId) {
    this.#id = newId;
  }

  // set endpoint(value) {
  //   this.#endpoint = value;
  // }
}

export default apiThemoviedb;

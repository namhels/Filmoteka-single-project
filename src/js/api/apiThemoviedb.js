import axios from 'axios';

// Ключ API(v3 auth): 308f19df2a761157194efc58109ee68d

// Ключ доступа к API(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDhmMTlkZjJhNzYxMTU3MTk0ZWZjNTgxMDllZTY4ZCIsInN1YiI6IjYzNTNkMDYwNGNhNjc2MDA4MjVjYjczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jNU4Cgs9eD0B3oKicejlsIFDcPGthLO_Sfgpz1TvLl0

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class apiThemoviedb {
  #API_KEY = '308f19df2a761157194efc58109ee68d';
  #page = 1;
  #endpoint = '';

  constructor({ endpoint }) {
    this.#endpoint = endpoint;
  }

  async fetchMovies() {
    const queryParams = new URLSearchParams({
      api_key: this.#API_KEY,
      page: this.#page,
    });

    const res = await axios.get(`/${this.#endpoint}?${queryParams}`);
    return res.data;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  set endpoint(value) {
    this.#endpoint = value;
  }
}

export default apiThemoviedb;

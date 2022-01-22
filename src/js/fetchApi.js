// import axios from 'axios';
const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25304871-df2e19bed09fd25767dfbf1e2';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.perPage = 40;
    this.page = 1;
  };

  async fetchApi() {
    const params = new URLSearchParams({
      q: this.searchQuery,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: this.page,
    });
    const url = `${BASE_URL}/?${params}`;
    this.stepPage();
    return await axios.get(url);
    
  };

  // async fetchApi(page) {
  //   console.log(this);
  //   try {
  //     const response = await axios.get(
  //       `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`,
  //     );
  //     const images = await response.data;
  //     return images;

  //   } catch (error) {
  //     console.log(error);
  //  }
    

    // return fetch(
    // `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`,
    // )
    // .then(response => response.json())
    // .then(console.log);
  // };

  stepPage() {
    this.page += 1;
  };

  resetPage() {
    this.page = 1;
  };

  get query() {
    return this.searchQuery;
  };

  set query(newQuery) {
    this.searchQuery = newQuery;
  };

}




// URL API
const URL = 'https://api.themoviedb.org/3/';
// API Key
const KEY = 'api_key=25607a3072cf47fce78da43cfa96480b';

class DataSource extends HTMLElement {
    static getMovie() {
        return fetch(`${URL}search/movie?query=avengers&${KEY}`)
    }
    static searchMovie(keyword) {
        return fetch(`${URL}search/movie?query=${keyword}&${KEY}`)
    }
    static modalBox(id) {
        return fetch(`${URL}movie/${id}?${KEY}`)
    }
    static genres(id) {
        return fetch(`${URL}/discover/movie?${KEY}&with_genres=${id}`)
    }
}

export default DataSource;

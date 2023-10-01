import DataSource from '../data/data-source.js'
import { GenresMovie } from '../data/genres.js'
import { itemModalBox } from '../component/BoxModal.js'

const moment = require('moment');


const main = () => {

    // Items Movies
    const ItemsMovies = respon => {
        const boxListMovie = document.querySelector(".box-list-movie");
        boxListMovie.innerHTML = "";
        const movie = respon.results;
        movie.forEach(element => {
            const divBoxMovie = document.createElement("div");
            divBoxMovie.className = "box-movie";
            boxListMovie.appendChild(divBoxMovie);
            const posterMovie = document.createElement("img");
            posterMovie.src = `https://image.tmdb.org/t/p/original${element.poster_path}`;
            divBoxMovie.appendChild(posterMovie);
            const divInformationMovie = document.createElement("div");
            divInformationMovie.className = "information"
            divBoxMovie.appendChild(divInformationMovie);
            const titleMovie = document.createElement("h3");
            divInformationMovie.appendChild(titleMovie);
            titleMovie.className = "title-movie";
            titleMovie.innerHTML = element.title;
            titleMovie.onclick = () => modalBox(element.id); 
            const dateMovie = document.createElement("h6");
            divInformationMovie.appendChild(dateMovie);
            dateMovie.innerHTML = moment(element.release_date).format("YYYY");
        });
    }

    // Search Movie
    const searchMovie = () => {
        const searchElementDekstop = document.querySelector('nav-bar');
        const searchElementMobile = document.querySelector('#btnSearchMobile');
        const search = (search) => {
            DataSource.searchMovie(search)
            .then(respon => respon.json())
            .then(respon =>{
                ItemsMovies(respon);
            })
        }
        searchElementMobile.addEventListener('click', () => {
            const inputElementMobile = document.querySelector('#inputSearchMobile');
            return search(inputElementMobile.value);
        });
        const onButtonSearchClicked = () => {
            return search(searchElementDekstop.value);
        };
        searchElementDekstop.btnSearch = onButtonSearchClicked;
    }
    searchMovie();

    // Get Movie By genre 
    const GetMovieByGenres = () =>{
        const listGenres = document.querySelector('.list-genre');
        GenresMovie.genres.forEach(element => {
            const elementGenres = document.createElement('button');
            elementGenres.className = "genre";
            elementGenres.innerHTML = element.name;
            listGenres.appendChild(elementGenres);
            elementGenres.onclick = () => {
                DataSource.genres(element.id)
                .then(respon => respon.json())
                .then(respon =>{
                    ItemsMovies(respon);
                })
            }
        });
    }
    GetMovieByGenres();

    // Get Data Movie 
    const getMovie = () => {
        DataSource.getMovie()
        .then(respon => respon.json())
        .then(respon =>{
            ItemsMovies(respon);
        })
    }
    getMovie();

     // Box Modal Movie 
    const modalBox = id =>{
        DataSource.modalBox(id)
        .then(response => response.json())
        .then(response => {
            itemModalBox(response);
        });
    }
}

export default main;
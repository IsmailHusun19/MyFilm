const moment = require('moment');
moment.locale('id');

export const itemModalBox = (response) => {
    const movie = response;
    if(!document.querySelector(".modal-box-content")){
        const modalBox = document.querySelector(".modal-box");
        let genre = [];
        movie.genres.forEach(element => {
            genre.push(element.name);
        });
        modalBox.innerHTML = `
        <div class="modal-box-content">
            <div class="image-modal-box"><img src="https://image.tmdb.org/t/p/original${response.poster_path}" alt=""></div>
            <div class="container-title-box-modal">
                <div class="gap">
                    <h3>Title</h3>
                    <h6 class="judul-film">${movie.title}</h6>
                </div>
                <div class="gap">
                    <h3>Date</h3>
                    <p class="tahun-film">${moment(movie.release_date).format("LL")}</p>
                </div>
                <div class="gap">
                    <h3>production</h3>
                    <p class="penulis-film">${movie.production_companies[0].name}</p>
                </div>
                <div class="gap">
                    <h3>Genre</h3>
                    <p class="aktor-film">${genre.join(" - ")}</p>
                </div>
                <div class="gap">
                    <h3>Overview</h3>
                    <p class="deskripsi-film">${movie.overview}</p>
                </div>
            </div>
        </div>`;
        const btnCloseBoxModal = document.createElement('button');
        modalBox.appendChild(btnCloseBoxModal);
        btnCloseBoxModal.className = 'btn-close-box-modal';
        btnCloseBoxModal.innerHTML = "Close";
        modalBox.classList.add("modal-box-aktif");
        const container = document.querySelector(".container");
        container.classList.add("container-modal-box-aktif");
        const fCloseBoxModal = () => {
            document.querySelector(".modal-box-content").remove();
            document.querySelector(".btn-close-box-modal").remove();
            document.querySelector(".modal-box").classList.remove("modal-box-aktif");
            document.querySelector(".container").classList.remove("container-modal-box-aktif");
        }
        btnCloseBoxModal.addEventListener("click", () =>{
            fCloseBoxModal();
        })
    }
}
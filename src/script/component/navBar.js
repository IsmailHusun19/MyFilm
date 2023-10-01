class NavBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
    set btnSearch(event) {
        this._btnSearch = event;
        this.render();
    }
    get value() {
        return this.shadowDOM.querySelector('#inputSearch').value;
    }
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        .nav-bar {
            width: 100%;
            background-color: rgb(18, 18, 18);
            border-bottom: 2px solid gold;
            position: fixed;
        }
        
        .nav-bar-list {
            width: 90%;
            height: 60px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgb(18, 18, 18);
        
        }
        
        .title h1 {
            color:gold;
            transition: all ease-in-out .25s;
            cursor: pointer;
            font-size: 35px;
        }
        
        .title h1:hover{
            transform: scale(1.05);
            text-shadow: 1px 1px 5px gold;
        }
        
        .search {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 5px;
        }
        
        .search input {
            width: 100%;
            height: 20px;
            border-radius: 5px;
            font-size: large;
            padding: 5px;
            border: none;
            transition: all ease-in-out .25s;
        }
        
        .search input:focus{
            outline: 2px solid gold;
            box-shadow: 2px 2px 2px gold;
        }
        
        .search button {
            width: 100px;
            height: 30px;
            border-radius: 5px;
            background-color: gold;
            cursor: pointer;
            border: none;
        }
        .search button h3 {
            margin: 0;
        }
        
        .search button:hover{
            background-color:goldenrod;
        }
        
        @media screen and (max-width: 700px){
            .nav-bar{
                position: static;
            }
            .search{
                display: none;
            }
            .title h1 {
                font-size: 25px;
            }
        }
        </style>
        <div class="nav-bar">
            <div class="nav-bar-list">
                <div class="title" id="p"><h1>MY FILM</h1></div>
                <div class="search">
                    <input id="inputSearch" type="text">
                    <button id="btnSearch"><h3>Cari</h3></button>
                </div>
            </div>
        </div>`;
        this.shadowDOM.querySelector('#btnSearch').addEventListener('click', this._btnSearch);
    }
  }
   
customElements.define('nav-bar', NavBar);

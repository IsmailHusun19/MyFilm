class Footer extends HTMLElement {
    constructor() {
      super();
      this._shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this._shadowDOM.innerHTML = `
      <style>
      footer{
            width: 100%;
            background-color: rgb(5, 5, 5);
            border-top: 1px solid gold;
        }
        
        .container-footer {
            width: 90%;
            margin: 0 auto;
        
        }
        
        .title-footer{
            height: 80px;
            display: flex;
            align-items: center;
        }
        
        .title-footer h1 {
            color:gold;
            transition: all ease-in-out .25s;
            cursor: pointer;
            font-size: 35px;
        }
        
        .title-footer h1:hover{
            transform: scale(1.02);
            text-shadow: 1px 1px 5px gold;
        }
        
        .copyright{
            color: gold;
            font-style: italic;
            padding: 10px;
            text-align: center;
            background-color: rgb(5, 5, 5);
        }
        @media screen and (max-width: 700px){
          .title-footer h1 {
            font-size: 25px;
          }
        }
      </style>
        <footer>
            <div class="container-footer">
                <div class="title-footer"><h1>MY FILM</h1></div>
            </div>
            <div class="copyright">©Copyright Film Ku</div>
        </footer>`
    }
  }
   
customElements.define('footer-footer', Footer);

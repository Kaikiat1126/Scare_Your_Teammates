import '../style/style.css'
import javascriptLogo from '/javascript.svg'
import Navigation from './navigation.js';

const nav = new Navigation();

export default class APP{
    constructor(name, id){
        //console.log("APP");
        this.name = name;
        this.contents = "";
        this.init();
        this.render(id);
    }

    init(){
        //this.con =
        this.contents = 
        `<div>
            <div id="navbox"></div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>
            <h1>Hello ${this.name}!</h1>
            <div class="card">
                <button id="counter" type="button"></button>
            </div>
            <p class="read-the-docs">
                Click on the Vite logo to learn more
            </p>
        </div>`
        //setupCounter(document.querySelector('#counter'))
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        nav.render("#navbox");
    }

}
import '../style/style.css'
import javascriptLogo from '/javascript.svg'
import Navigation from './Navigation.js';
import Help from './Help.js';

const nav = new Navigation();
const help = new Help();

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
            <p class="read-the-docs">
                Click on the Vite logo to learn more
            </p>
            <div id="helpbox"></div>
            <div id="footerbox"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        nav.render("#navbox");
        help.render("#helpbox");
    }

}
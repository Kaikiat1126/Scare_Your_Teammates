import '../style/style.css'
import javascriptLogo from '../public/javascript.svg'
import { setupCounter } from './counter.js'

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
        this.contents = `<div>
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
        //console.log("render ", id);
        document.querySelector(id).innerHTML = this.contents;
        setupCounter(document.querySelector('#counter'))
        //console.log('rendered');
    }

}
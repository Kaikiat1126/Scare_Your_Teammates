import '../style/style.css'
import javascriptLogo from '/javascript.svg'
import Navigation from './Navigation.js';
import Help from './Help.js';
import Footer from './Footer.js';
import Page from './Page.js';

const nav = new Navigation();
const page = new Page();
const help = new Help();
const footer = new Footer();

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
            <div id="pagebox"></div>
            <div id="helpbox"></div>
            <div id="navbox"></div>
            <div id="footerbox"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        nav.render("#navbox");
        page.render("#pagebox");
        help.render("#helpbox");
        footer.render("#footerbox");
    }

}
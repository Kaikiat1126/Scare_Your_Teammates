import '../style/style.less'
import '../style/framework.css'
import Navigation from './Navigation.js';
import Help from './Help.js';
import Footer from './Footer.js';
import Page from './Page.js';
import Config from './config';

const config = new Config();
const nav = new Navigation(config.getName(), config.getUrl());
const page = new Page(config);
const help = new Help();
const footer = new Footer();

export default class APP{
    constructor(id){
        this.contents = "";
        this.init();
        this.render(id);
    }

    init(){
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
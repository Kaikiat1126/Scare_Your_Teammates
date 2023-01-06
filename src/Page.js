import "../style/page.css"
import PageHeader from "./PageHeader.js";
import PageBody from "./PageBody.js";

const header = new PageHeader();
const body = new PageBody();

export default class Page{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page" class="mt-50 flex flex-col pos-inherit">
            <div id="page-header"></div>
            <div id="page-body"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        header.render("#page-header");
        body.render("#page-body");
    }
}

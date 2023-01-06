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
        `<div id="page" class="container-body mt-65 flex flex-col pos-inherit">
            <div id="page-headerbox" class="pt-3 pb-3"></div>
            <div id="page-bodybox"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        header.render("#page-headerbox");
        body.render("#page-bodybox");
    }
}

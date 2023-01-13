import "../style/page.css"
import PageHeader from "./PageHeader.js";
import PageBody from "./PageBody.js";
import Config from "./config.js";

const config = new Config();
const moduleName = config.getModuleName();
const submitText = config.getSumbitText();
const submitDesc = config.getSubmitDesc();

const headerProps = {
    moduleName: moduleName,
    submitText: submitText
}

const bodyProps = {
    submitText: submitText,
    submitDesc: submitDesc
}

const header = new PageHeader(headerProps);
const body = new PageBody(bodyProps);

export default class Page{
    constructor(config){
        this.config = config;
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page" class="container-body mt-50 flex flex-col pos-inherit">
            <div id="page-headerbox" class="pt-3 pb-3"></div>
            <div id="page-bodybox" class="pb-3"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        header.render("#page-headerbox");
        body.render("#page-bodybox");
    }
}

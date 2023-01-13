import "../style/page.css"
import PageHeader from "./PageHeader.js";
import PageBody from "./PageBody.js";
import Config from "./config.js";

const config = new Config();

const isSubmit = config.getIsSubmit();
let lastModifyDate = config.getLastModifyDateStr();
if(!isSubmit) lastModifyDate = "-";

const headerProps = {
    moduleName: config.getModuleName(),
    submitText: config.getSumbitText()
}

const bodyProps = {
    submitText: config.getSumbitText(),
    submitDesc: config.getSubmitDesc()
}

const tableProps = {
    groupStr: config.getGroupStr(),
    submissionText: config.getSubmissionStatusText(),
    dueDate: config.getDueDate(),
    timeRemaining: config.getTimeRemaining(),
    lastModifyDate: lastModifyDate,
    fileIconPath: config.getFileIconPath(),
    fileName: config.getFileName(),
    plagiarism: config.getPlagiarism(),
    fileLastModifyDate: config.getLastModifyDateTime(),
    isSubmit: isSubmit,
    isDue: config.getIsDue()
}

const header = new PageHeader(headerProps);
const body = new PageBody(bodyProps,tableProps);

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

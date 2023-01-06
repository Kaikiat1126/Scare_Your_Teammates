import SubmissionTable from "./SubmissionTable.js";

const table = new SubmissionTable();

export default class PageBody{
    constructor(submitText){
        this.submitText = submitText;
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-body" class="flex flex-col pos-relative bg-white pd-4">
            <h2 id="submit-title" class="mb-2 mt-0 fw-300">${this.submitText}</h2>
            <div id="submit-intro" class="pb-3 pt-3">
                <div class="overflow-auto">
                    <p class="mt-0 mb-3 txt-left">Each group only need to submit ONE assignment document.</p>
                </div>
            </div>
            <div id="submit-tablebox"></div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        table.render("#submit-tablebox");
    }
}
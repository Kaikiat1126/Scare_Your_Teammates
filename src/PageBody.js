import SubmissionTable from "./SubmissionTable.js";

const table = new SubmissionTable();

export default class PageBody{
    constructor(submitText, submitDesc){
        this.submitText = submitText;
        this.submitDesc = submitDesc;
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-body" class="flex flex-col pos-relative bg-white pd-4">
            <h2 id="submit-title" class="mb-2 mt-0 fw-300">${this.submitText}</h2>
            <div id="submit-intro" class="pb-3 pt-3">
                <div class="overflow-auto">
                    <p class="mt-0 mb-3 txt-left">${this.submitDesc}</p>
                </div>
            </div>
            <div id="submit-tablebox"></div>
            <div class="mt-5 mb-1 ">
                <div class="flex flex-wrap align-items-center">
                    <div class="col-md-4">
                        <div class="float-l">
                            <a href="#" class="btn txt-center bg-transparent ver-al-mid cur-p fw-400 activity-link"></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="txt-center">
                            <div id="url-select">   
                                <form action"#" class="flex flex-wrap align-items-center form-inline">
                                    <label class="sr-only">Jump to...</label>
                                    <select class="form-control ver-al-mid fs-15 fw-400 bg-white m-0 pos-relative arrow bg-norepeat">
                                        <option value selected>Jump to...</option>
                                        <option value="submit-intro">Submission introduction</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="float-r">
                            <a href="#" class="btn cur-p fw-400 activity-link">Assignment Group member self-enrolment link ►</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
        table.render("#submit-tablebox");
    }
}
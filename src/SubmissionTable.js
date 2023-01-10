import Config from "./config.js";

const config = new Config();
const groupStr = config.getGroupStr();
const dueDate = config.getDueDate();
const timeRemaining = config.getTimeRemaining();
const submissionText = config.getSubmissionStatusText();
const isSubmit = config.getIsSubmit();
const fileIconPath = config.getFileIconPath();
const fileName = config.getFileName();
const plagiarism = config.getPlagiarism();

export default class SubmissionTable{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="submit-table">
            <h3  id="table-title" class="mb-2 mt-0 fw-300">Submission status</h3>
            <div id="summary-table" class="pb-3 pt-3">
                <table id="general-table" class="mb-3">
                    <tbody>
                        <tr>
                            <th class="w-150">Group</th>
                            <td>${groupStr}</td>
                        </tr>
                        <tr>
                            <th class="w-150">Submission status</th>
                            <td class="c-black">${submissionText}</td>
                        </tr>
                        <tr>
                            <th class="w-150">Grading status</th>
                            <td>Not graded</td>
                        </tr>
                        <tr>
                            <th class="w-150">Due date</th>
                            <td>${dueDate}</td>
                        </tr>
                        <tr>
                            <th class="w-150">Time remaining</th>
                            <td class="timeRemaining dueEffect">${timeRemaining}</td>
                        </tr>
                        <tr>
                            <th class="w-150">Last modified</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th class="w-150">File submissions</th>
                            <td id="file-plugin"></td>
                        </tr>
                        <tr>
                            <th class="w-150">Submission comments</th>
                            <td>
                                <div class="pb-3 pt-3">
                                    <div class="txt-left">
                                        <a id="submit-comment" class="cur-p bg-transparent">
                                            <i class="fa-solid fa-caret-right icon mr-2 fs-13"></i>
                                            <span>Comments (0)</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    initFilePlugin(){
        const filePlugin = document.querySelector("#file-plugin");
        let pluginHtml = "";
        if(isSubmit){
            pluginHtml = `
            <div class="pb-3 pt-3">
                <div>
                    <table class="mb-0">
                        <tbody>
                            <tr>
                                <td id="tree-view" class="pd-0 bd-0 cur-p bg-norepeat">
                                    <a href="#" class="spacer">&nbsp;</a>
                                </td>
                                <td class="pd-0 bd-0">
                                    <div class="float-l bd-box min-w-300">
                                        <img title="fileIcon" alt="fileIcon" src=${fileIconPath} class="icon mr-2 ml-0 bs-none"/>
                                        <a href="#" target="_blank" class="cur-p">${fileName}</a>
                                        <div class="links-container bd-box">
                                            <div class="pos-relative report-container float-l bd-box">
                                                <div title="similarity" id="plagiarism-box" class="c-white fs-12 txt-center bd-box">${plagiarism}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="float-r">23 December 2022, 4:22 PM</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        }else{
            pluginHtml = `<div>-</div>`;
        }

        filePlugin.innerHTML = pluginHtml;
    }


    render(id){
        document.querySelector(id).innerHTML = this.contents;
        this.initFilePlugin();
    }
}

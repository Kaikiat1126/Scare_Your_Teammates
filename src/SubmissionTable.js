import Config from "./config.js";

const config = new Config();
const groupStr = config.getGroupStr();
const dueDate = config.getDueDate();
const timeRemaining = config.getTimeRemaining();

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
                            <td class="c-black">Nothing has been submitted for this assignment</td>
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
                            <td class="timeRemaining">${timeRemaining}</td>
                        </tr>
                        <tr>
                            <th class="w-150">Last modified</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th class="w-150">File submissions</th>
                            <td>-</td>
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

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}

import Config from "./config.js";

const config = new Config();
console.log(config.getSumbitText());

export default class PageHeader{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-header" class="flex flex-col pos-relative bg-white pd-4">
            <div class="align-items-center d-sm-flex">
                <div class="mr-auto">
                    <div class="pd-1 overflow-hidden pos-relative lh-24 float-l ver-al-mid">
                        <h1 class="course-title mt-0 mb-2 fw-300">${config.getModuleName()}</h1>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div id="page-navbar">
                    <ol class="flex flex-wrap mb-0 breadcrumb bg-transparent mt-0">
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">Dashboard</a>
                        </li>
                        <li class="bc-items flex">
                            My courses
                        </li>
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">${config.getModuleName()}</a>
                        </li>
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">Summative Assessment</a>
                        </li>
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">${config.getSumbitText()}</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
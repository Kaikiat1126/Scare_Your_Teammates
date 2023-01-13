export default class PageHeader{
    constructor(headerProps){
        this.moduleName = headerProps.moduleName;
        this.submitText = headerProps.submitText;
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-header" class="flex flex-col pos-relative bg-white pd-4">
            <div class="align-items-center d-sm-flex">
                <div class="mr-auto">
                    <div class="pd-1 overflow-hidden pos-relative lh-24 float-l ver-al-mid">
                        <h1 class="course-title mt-0 mb-2 fw-300">${this.moduleName}</h1>
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
                            <a href="#" class="bc-item bg-transparent txt-none">${this.moduleName}</a>
                        </li>
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">Summative Assessment</a>
                        </li>
                        <li class="bc-items flex">
                            <a href="#" class="bc-item bg-transparent txt-none">${this.submitText}</a>
                        </li>
                    </ol>
                </div>
                <div class="ml-auto flex"></div>
            </div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
export default class PageHeader{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-header" class="flex flex-col">
            <h1 class="text-4xl">Page Header</h1>
            <p class="text-2xl">This is the page header</p>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
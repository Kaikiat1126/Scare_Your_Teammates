export default class PageBody{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="page-body" class="flex flex-col">
            <h1 class="text-4xl">Page Body</h1>
            <p class="text-2xl">This is the page body</p>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
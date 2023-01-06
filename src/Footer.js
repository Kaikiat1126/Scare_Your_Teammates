import "../style/footer.css"

export default class Footer{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div id="footer" class="pt-3 pb-3 bg-dark c-light">
            <div class="container">
                <a href="#" class="cur-p">Get the mobile app</a>
            </div>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
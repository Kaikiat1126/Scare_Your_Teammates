import '../style/helpButton.css'

export default class Help{
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div class="helpBtn btn-container">
            <div class="btn-prop"> 
                <p>Need Help?</p>
            </div>
            <span class="btn-top cur-p">
                <a href="#" class="btn btn-light">
                    <i class="fa-sharp fa-solid fa-arrow-up icon"></i>
                </a>
            </span>
        </div>`
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}
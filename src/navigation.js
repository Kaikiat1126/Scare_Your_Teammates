import '../style/navigation.css'

export default class Navigation {
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div class="navbar fixed-top navpadding ">
                <div class="nav_side margin-3">
                    <button class="btn btn-light bg-gray btn-side" type="button">
                        <i class="fa-sharp fa-solid fa-bars icon"></i>
                    </button>
                </div>
                <div class="nav_logo">
                    <img src="/APU_logo.jpeg" class="apuLogo" alt="APU logo" />
                </div>
                <div class="nav_search"></div>
                <div class="nav_menu"></div>
            </div>
        `
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}

import '../style/navigation.css'

export default class Navigation {
    constructor(){
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div class="navbar fixed-top navpadding ">
                <div class="nav_side"></div>
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

import '../style/navigation.css'

export default class Navigation {
    constructor(name, url){
        this.name = name;
        this.url = url;
        this.contents = "";
        this.init();
    }

    init(){
        this.contents = 
        `<div class="navbar fixed-top navpadding bg-white">
                <div class="nav_side mr-3">
                    <button class="btn btn-light bg-gray btn-side mr-1" type="button">
                        <i class="fa-sharp fa-solid fa-bars icon"></i>
                    </button>
                </div>
                <div class="nav_logo cur-p">
                    <img src="/APU_logo.jpeg" class="apuLogo" alt="APU logo" />
                    <span class="nav_title">Course Material</span>
                </div>
                <div class="nav_search ml-auto">
                    <div class="btn btn-search btn-color cur-p">
                        <i class="fa-solid fa-magnifying-glass icon"></i>
                    </div>
                </div>
                <div class="nav_menu nav">
                    <div class="nav_item">
                        <div class="btn btn-color pd-2 cur-p">
                            <i class="fa-solid fa-bell icon"></i>
                            <div class="count-container pos-absolute">1</div>
                        </div>
                        <div class="btn btn-color pd-2 cur-p"><i class="fa-sharp fa-solid fa-comment icon"></i></div>
                    </div>
                    <div class="nav_item align-items-center pl-2">
                        <div class="nav_usermenu cur-p c-blue">
                            <span class="nav_username pt-2 mr-1">${this.name} .</span>
                            <span class="nav_avatar">
                                <img src="${this.url}" class="avatar mr-2" alt="avatar" />
                            </span>
                            <b class="dropdown-toggle"></b>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    render(id){
        document.querySelector(id).innerHTML = this.contents;
    }
}

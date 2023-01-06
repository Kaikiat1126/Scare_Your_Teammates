export default class Config{
    constructor(){
        this.name = "TYU KAI KIAT";
        this.modulename = "module name";
        this.dueDate = "due date";
        this.url = "/default_profile.png";
    }
    
    getName(){
        return this.name;
    }

    getModuleName(){
        return this.modulename;
    }

    getDueDate(){
        return this.dueDate;
    }

    getUrl(){
        return this.url;
    }

}
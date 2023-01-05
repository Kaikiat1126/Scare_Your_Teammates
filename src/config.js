export default class Config{
    constructor(){
        this.name = "username";
        this.modulename = "module name";
        this.dueDate = "due date";
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

}
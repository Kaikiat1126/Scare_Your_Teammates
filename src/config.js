export default class Config{
    constructor(){
        this.name = "TYU KAI KIAT";
        this.moduleName = "System Development Methods (092022-SKK)";
        this.dueDate = "Friday, 23 December 2022, 11:59 PM";
        this.url = "/default_profile.png";
        this.title = "Vite App";
        this.submitText = "Assignment Submission";
        this.groupStr = "Group 10";
    }
    
    getName(){
        return this.name;
    }

    getModuleName(){
        return this.moduleName;
    }

    getDueDate(){
        return this.dueDate;
    }

    getUrl(){
        return this.url;
    }

    getTitle(){
        return this.title;
    }

    getModuleCode(){
        let arr = this.moduleName.split(" ");
        let chars = arr.map(str => str.charAt(0)).slice(0, -1);
        return chars.join("");
    }

    getSumbitText(){
        return this.getModuleCode() +" " + this.submitText;
    }

    getGroupStr(){
        return this.groupStr;
    }
}
import DateTools from "./dateTools.js";

export default class Config{
    constructor(){
        this.name = "TYU KAI KIAT";
        this.moduleName = "System Development Methods (092022-SKK)";
        //this.moduleName = "Workplace Professional Communication Skills (092022-VNH)";
        this.dueDate = "Friday, 23 December 2022, 11:59 PM";
        //this.dueDate = "Monday, 9 January 2023, 11:59 PM";
        //this.dueDate = "Friday, 23 December 2022, 12:00 AM";

        const dateTools = new DateTools(this.dueDate);

        this.url = "/default_profile.png";
        this.title = "Vite App";
        this.submitText = "Assignment Submission";
        //this.submitText = "Individual Internship Letter Writing";
        this.submitDesc = "Each group only need to submit ONE assignment document."
        this.groupStr = "Group 10";
        this.timeRemainingText = dateTools.getTimeRemaining(this.dueDate);
        this.isDue = dateTools.getIsDue();
        this.isSubmit = false;
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

    getIsDue(){
        return this.isDue;
    }

    getIsSubmit(){
        return this.isSubmit;
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
        //return this.submitText;
    }

    getSubmitDesc(){
        return this.submitDesc;
    }

    getGroupStr(){
        return this.groupStr;
    }

    getTimeRemaining(){
        return this.timeRemainingText;
    }

    getSubmissionStatusText(){
        return this.isSubmit ? "Submitted for grading" : "Nothing has been submitted for this assignment";
    }
    
}
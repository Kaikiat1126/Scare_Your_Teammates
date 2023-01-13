import DateTools from "./dateTools.js";
//const dateTools = new DateTools();

export default class Config{

    constructor(){
        this.name = "TYU KAI KIAT";
        this.url = "/default_profile.png";

        this.moduleName = "System Development Methods (092022-SKK)";
        this.dueDate = "Friday, 23 December 2022, 11:59 PM";
        //this.dueDate = "Monday, 12 January 2023, 11:59 PM";
        this.lastModifyDateTime = "Friday, 23 December 2022, 4:22 PM"

        const dateTools = new DateTools(this.dueDate,this.lastModifyDateTime);

        this.submitText = "Assignment Submission";
        this.submitDesc = "Each group only need to submit ONE assignment document."

        this.isSubmit = false;

        this.timeRemainingText = dateTools.getTimeRemaining();
        this.isDue = dateTools.getIsDue();
        
        this.isSubmittedTime = "1 day 20 hours"
        this.isLateTime = "10 secs"
        
        this.fileIconType = "docx";
        this.fileName = "Group10_SDM_Assignment"

        this.fileIconPaths = {
            docx: "/docx.png",
            pdf: "/pdf.png",
            pptx: "/powerpoint.png",
            xlsx: "/spreadsheet.png",
            zip: "/zip.png"
        };

        //optional
        this.groupNum = 10;  
        //this.groupNum = Math.floor(Math.random() * 100);  

        this.plagiarism = 9;
        //this.plagiarism = Math.floor(Math.random() * 15);

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
        return "Group " + this.groupNum;
    }

    getTimeRemaining(){
        // const dateTools = new DateTools(this.dueDate,this.lastModifyDateTime);
        // return dateTools.getTimeRemaining(this.isSubmit);
        return this.timeRemainingText;
    }

    getIsSubmittedTime(){
        return `Assignment was submitted ${this.isSubmittedTime} early`;
    }

    getIsLateTime(){
        return `Assignment was submitted ${this.isLateTime} late`;
    }

    getSubmissionStatusText(){
        return this.isSubmit ? "Submitted for grading" : "Nothing has been submitted for this assignment";
    }

    getFileIconPath(){
        return this.fileIconPaths[this.fileIconType] || "/text.png";
    }

    getFileName(){
        return this.fileName + "." + this.fileIconType.toLowerCase();
    }

    getPlagiarism(){
        return this.plagiarism + "%"
    }
    
}
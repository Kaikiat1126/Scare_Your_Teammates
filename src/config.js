import DateTools from "./dateTools.js";
//const dateTools = new DateTools();

export default class Config{

    constructor(){
        this.name = "TYU KAI KIAT";
        this.url = "/default_profile.png";
        this.moduleName = "System Development Methods (092022-SKK)";
        
        //this.dueDate = "23 December 2022, 11:59 PM";
        this.dueDate = "12 January 2023, 11:59 PM";
        
        //this.lastModifyDateTime = "23 December 2022, 4:22 PM"
        this.lastModifyDateTime = "11 January 2023, 5:59 PM"

        const dateTools = new DateTools(this.dueDate,this.lastModifyDateTime);

        this.submitText = "Assignment Submission";
        this.submitDesc = "Each group only need to submit ONE assignment document."

        this.leftLinkText = "";
        this.rightLinkText = "Assignment Group member self-enrolment link";

        this.dueDateStr = dateTools.getDaysFromDateTime(this.dueDate);
        this.lastModifyDateStr = dateTools.getDaysFromDateTime(this.lastModifyDateTime);


        //optional
        this.groupNum = 10;  
        //this.groupNum = Math.floor(Math.random() * 100);  

        //this.fileName = "Group10_SDM_Assignment";
        this.fileName = `Group${this.groupNum}_${this.getModuleCode()}_Assignment`;

        this.fileIconType = "docx";

        this.plagiarism = 9;
        //this.plagiarism = Math.floor(Math.random() * 15);

        this.isSubmit = true;
        //this.isSubmit = false;

        this.timeRemainingText = dateTools.getTimeRemaining(this.isSubmit);
        this.isDue = dateTools.getIsDue();

        this.fileIconPaths = {
            docx: "/docx.png",
            pdf: "/pdf.png",
            pptx: "/powerpoint.png",
            xlsx: "/spreadsheet.png",
            zip: "/zip.png"
        };

    }
    
    getName(){
        return this.name;
    }

    getModuleName(){
        return this.moduleName;
    }

    getDueDate(){
        return this.dueDateStr;
    }

    getLastModifyDateTime(){
        return this.lastModifyDateTime;
    }

    getLastModifyDateStr(){
        return this.lastModifyDateStr;
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

    getLeftLinkText(){
        const leftLinkText = this.leftLinkText;
        if(leftLinkText == "") return "";
        else return `◄ ${leftLinkText}`;
    }

    getRightLinkText(){
        const rightLinkText = this.rightLinkText;
        if(rightLinkText == "") return "";
        else return `${rightLinkText} ►`;
    }

    getGroupStr(){
        return "Group " + this.groupNum;
    }

    getTimeRemaining(){
        return this.timeRemainingText;
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
export default class DateTools{
    constructor(dueDate,lastModifyDateTime){
        this.dueDateStr = dueDate;
        this.lastModifyDateTimeStr = lastModifyDateTime;
        this.isDue = false;
    }

    getCurrTimezoneDate() {
        const timezoneOffset = new Date().getTimezoneOffset();
        const currDateTime = new Date(new Date().getTime() + timezoneOffset * 60000 + 480 * 60000);
        return currDateTime;
    }

    formatDate(dateStr) {
        if (dateStr === ""){
            alert("Date string is empty");
            return "";
        }
        const date = new Date(dateStr);
        return date.toString();
    }

    getDateDiff(dueDate, date2) {
        dueDate = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
        date2 = typeof date2 === 'string' ? new Date(date2) : date2;

        this.isDue = dueDate < date2 ? true : false;

        const diff = Math.abs(dueDate - date2);
        
        const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);

        return [`${diffDays}`,`${diffHours}`,`${diffMinutes}`,`${diffSeconds}`];
    }

    getTimeDiff(days, hours, minutes, seconds) {
        if (days > 0) {
            return `${days} day${(days > 1) ? 's' : ''} ${hours} hour${(hours > 1) ? 's' : ''}`;
        } else if (hours > 0) {
            return `${hours} hour${(hours > 1) ? 's' : ''} ${minutes} min${(minutes > 1) ? 's' : ''}`;
        } else if (minutes > 0) {
            return `${minutes} min${(minutes > 1) ? 's' : ''} ${seconds} sec${(seconds > 1) ? 's' : ''}`;
        } else {
            return `${seconds} sec${(seconds > 1) ? 's' : ''}`;
        }
    }

    getTimeRemainingText(timeStr, isSubmit) {
        const overdueText = `Assignment is overdue by: ${timeStr}`;
        const lateText = `Assignment was submitted ${timeStr} late`;
        const onTimeText = `${timeStr}`;
        const earlyText = `Assignment was submitted ${timeStr} early`;
      
        if (this.isDue) {
          return isSubmit ? lateText : overdueText;
        } else {
          return isSubmit ? earlyText : onTimeText;
        }
    }     

    getTimeRemaining(isSubmit){
        if(arguments.length === 0) isSubmit = false;

        const currDate = this.getCurrTimezoneDate();
        const dueDate = this.formatDate(this.dueDateStr);
        const lastModifyDate = this.formatDate(this.lastModifyDateTimeStr);

        let arrDiff = "";

        if(isSubmit) {
            if(lastModifyDate === "") return;
            arrDiff = this.getDateDiff(dueDate, lastModifyDate);
        }else{
            arrDiff = this.getDateDiff(dueDate, currDate);
        }

        const day = arrDiff[0];
        const hour = arrDiff[1];
        const minute = arrDiff[2];
        const second = arrDiff[3];

        const timeStr = this.getTimeDiff(day, hour, minute, second);

        return this.getTimeRemainingText(timeStr,isSubmit);
    }

    getIsDue(){
        return this.isDue;
    }

    getDaysFromDateTime(dateTimeStr){
        let date = new Date(dateTimeStr);
        let day = date.getDay();
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return `${days[day]}, ${dateTimeStr}`;
    }

}
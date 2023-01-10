export default class DateTools{
    constructor(dueDate){
        this.dueDateStr = dueDate;
        this.isDue = false;
    }

    getCurrTimezoneDate() {
        const timezoneOffset = new Date().getTimezoneOffset();
        const currDateTime = new Date(new Date().getTime() + timezoneOffset * 60000 + 480 * 60000);
        return currDateTime;
    }

    formatDate(dueDate) {
        const date = new Date(dueDate);
        return date.toString();
    }

    getDateDiff(dueDate, currDate) {
        dueDate = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
        currDate = typeof currDate === 'string' ? new Date(currDate) : currDate;

        this.isDue = dueDate < currDate ? true : false;

        const diff = Math.abs(dueDate - currDate);
        
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

    getTimeRemaining(){
        const currDate = this.getCurrTimezoneDate();
        const dueDate = this.formatDate(this.dueDateStr);
        const arrDiff = this.getDateDiff(dueDate, currDate);

        const day = arrDiff[0];
        const hour = arrDiff[1];
        const minute = arrDiff[2];
        const second = arrDiff[3];

        const timeStr = this.getTimeDiff(day, hour, minute, second);
        //console.log(timeStr);

        if(this.isDue){
            return `Assignment is overdue by ${timeStr}`;
        }else{
            return `${timeStr}`;
        }
    }

    getIsDue(){
        return this.isDue;
    }

}
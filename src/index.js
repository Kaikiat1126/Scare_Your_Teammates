import App from './app.js';
import Config from './config.js';

const config = new Config();

// const currDate = config.getCurrTimezoneDate();
// console.log(currDate);

// const dueDate = config.formatDate(config.getDueDate())
// console.log(dueDate);
// console.log(config.getDateDiff(dueDate, currDate));

console.log(config.getTimeRemaining());

new App(config.getName(),'#app');

// console.log(config.getName());
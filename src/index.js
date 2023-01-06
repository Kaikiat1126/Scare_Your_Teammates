import App from './app.js';
import Config from './config.js';

const config = new Config();
new App(config.getName(),'#app');

// console.log(config.getName());
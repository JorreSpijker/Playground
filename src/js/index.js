import AppController from "./controllers/AppController";

/**
    Global state of the app
**/

const data = {};
window.data = data;

/**
    Controllers definition
**/
const TodoApp = new AppController(data);
TodoApp.init();
import Todo from "../models/Todo";
import Category from "../models/Category";
import Archive from "../models/Archive";

import EventController from './EventsController';
import TodoController from "./TodoController";
import CategoryController from "./CategoryController";
import ArchiveController from "./ArchiveController";

import * as Storage from "./StorageController";
import * as todoView from "../views/todoView";
import * as categoryView from "../views/categoryView";
import * as todoCategoryView from "../views/todoCategoryListView";
import * as archiveView from "../views/archiveView";

export default class AppController {
    constructor() {}

    loadItems() {

        if(!data.todoList) data.todoList = new Todo();
        if(!data.categories) data.categories = new Category();
        if(!data.archive) data.archive = new Archive();

        if(data.todoList && data.categories && data.archive) Storage.read(data);

        data.todoList.items.forEach(item => {
            todoView.renderListItem(item);
        })

        data.categories.items.forEach(item => {
            categoryView.renderListItem(item);
        })

        data.categories.items.forEach(item => {
            todoCategoryView.renderListItem(item);
        })

        data.archive.items.forEach(item => {
            archiveView.renderListItem(item);
        })
    }

    loadControllers() {
        const ControlTodo = new TodoController();
        const ControlCategory = new CategoryController();
        const ControlArchive = new ArchiveController();
        const Events = new EventController(ControlTodo, ControlCategory, ControlArchive);
        Events.init();
    }

    init() {
        this.loadControllers();
        this.loadItems();
    }
}
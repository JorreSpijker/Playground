import * as Storage from "./StorageController";
import * as todoView from "../views/todoView";

/**
    TODO CONTROLLER
**/

export default class TodoController {
    constructor() {
        this.data = data
    }

    find(id) {
        const findResult = this.data.todoList.find(id);
        return findResult
    }

    initModel(input, priority, category) {
        this.data.todoList.add(input, priority, category, false);
        Storage.persist(data);
    }

    initView() {
        const listObj = this.data.todoList.items;
        const itemAdded = listObj[Object.keys(listObj).length-1];
        todoView.renderListItem(itemAdded);
    }
}
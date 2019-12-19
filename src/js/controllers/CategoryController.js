import * as Storage from './StorageController'
import * as categoryView from "../views/categoryView";

/**
    CATEGORY CONTROLLER
**/

export default class CategoryController {
    constructor() {
        this.data = data
    }

    find(id) {
        const findResult = this.data.categories.find(id);
        return findResult
    }

    initModel(input) {    
        this.data.categories.add(input);
        Storage.persist(data);
    }

    initView() {
        const listObj = this.data.categories.items;
        const itemAdded = listObj[Object.keys(listObj).length-1];
        categoryView.renderListItem(itemAdded);
    }
}
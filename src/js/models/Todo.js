import uniqid from 'uniqid';
import BaseModel from './BaseModel';

export default class Todo extends BaseModel {
    constructor() {
        super();
        this.items = []
    }

    add(title, priority, category, status) {
        const item = {
            id: uniqid(),
            title: title,
            priority: priority,
            category: category,
            status: status
        }

        this.items.push(item);
        return item;
    }
    
}
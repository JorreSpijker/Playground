import BaseModel from './BaseModel';

export default class Archive extends BaseModel{
    constructor() {
        super();
        this.items = [];
    };

    add(id, title, priority, category, status) {
        const item = {
            id: id,
            title: title,
            priority: priority,
            category: category,
            status: status
        }

        this.items.push(item);
        return item;
    }
};
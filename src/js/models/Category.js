import uniqid from 'uniqid';
import BaseModel from './BaseModel';

export default class Category extends BaseModel{
    constructor() {
        super();
        this.items = []
    }

    add(title) {
        const item = {
            id: uniqid(),
            title: title,
        }

        this.items.push(item);
        return item;
    }
};
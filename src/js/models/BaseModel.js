export default class BaseModel {
    constructor() {}

    find(id) {
        const index = this.items.findIndex(el => el.id === id);
        const item = this.items[index];
        return item;
    }

    changeTitle(id, newValue) {
        const index = this.items.findIndex(el => el.id === id);
        const item = this.items[index];
        item.title = newValue;
    }

    changePriority(id, newValue) {
        const index = this.items.findIndex(el => el.id === id);
        const item = this.items[index];
        item.priority = newValue;
    }

    changeCategory(id, newValue) {
        const index = this.items.findIndex(el => el.id === id);
        const item = this.items[index];
        item.category = newValue;
    }

    changeStatus(id, newValue) {
        const index = this.items.findIndex(el => el.id === id);
        const item = this.items[index];
        item.status = newValue;
    }

    delete(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
    }
    
}
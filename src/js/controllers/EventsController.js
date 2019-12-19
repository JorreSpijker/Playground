import { elements } from "../views/base";
import * as Storage from "./StorageController";
import * as todoView from "../views/todoView";
import * as categorieView from "../views/categoryView";
import * as archiveView from "../views/archiveView";

/**
    Event listeners - Todo listitem controls
**/

export default class EventController {
    constructor(ControlTodo, ControlCategory, ControlArchive) {
        this.ControlTodo = ControlTodo,
        this.ControlCategory = ControlCategory,
        this.ControlArchive = ControlArchive
    }

    todoFormHandlers() {
        /**
            Todo form Event listeners
        **/

        elements.todo.addBtn.addEventListener("click", () => {
            eventTodoAdd();
        });

        elements.todo.form.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) { // 13 is enter
                eventTodoAdd();
            }
        });

        const eventTodoAdd = () => {
            const value = elements.todo.inputForm.value;
            const category = elements.todo.categoryForm.value;
            const priority = elements.todo.prioForm.value;

            this.ControlTodo.initModel(value, priority, category)
            this.ControlTodo.initView();

            // Reset form
            elements.todo.inputForm.value = "";
        }
    }

    todoListHandlers() {
        /**
            Todo list Event listeners
        **/

        elements.todo.list.addEventListener("click", (e) => {
            const listItem = e.target.closest('.list__item');
            if(listItem) {
                const id = listItem.dataset.id;

                if (e.target.matches('.js-delete, .js-delete *')) {
                    // Delete from the state & ui
                    data.todoList.delete(id);
                    Storage.persist(data);
                    todoView.deleteItem(id);
                };
            
                if (e.target.matches('.js-title, .js-title *')) {
                    let newValue;
            
                    e.target.closest('.js-title').addEventListener('focusout', () => {
                        newValue = e.target.closest('.js-title').textContent;
                        data.todoList.changeTitle(id, newValue);
                        Storage.persist(data);
                    })
                };

                if (e.target.matches('.js-archive, .js-archive *')) {
                    const item = this.ControlTodo.find(id);
                    data.archive.add(item.id, item.title, item.priority, item.category, item.status)
                    this.ControlArchive.initView(item);
                    data.todoList.delete(id);
                    todoView.deleteItem(id);
                    Storage.persist(data);
                };

                
            }
        });

        elements.todo.list.addEventListener("change", (e) => {
            const id = e.target.closest('.list__item').dataset.id;
            
            if (e.target.matches('.js-priority, .js-priority *')) {
                let select, newValue;
                select = e.target.closest('.js-priority');
                newValue = select.value;
                
                data.todoList.changePriority(id, newValue);
                Storage.persist(data);
            }

            if (e.target.matches('.js-category, js-category *')) {
                let select, newValue;
                select = e.target.closest('.js-category');
                newValue = select.value;

                data.todoList.changeCategory(id, newValue);
                Storage.persist(data);
            }

            if (e.target.matches('.js-check, .js-check *')) {
                let checkbox, newValue;
                checkbox = e.target;
                newValue = checkbox.checked;

                data.todoList.changeStatus(id, newValue);
                Storage.persist(data);
            }
        });
    }

    archiveListHandlers() {
        elements.archive.list.addEventListener("click", (e) => {
            e.preventDefault();
            const listItem = e.target.closest('.list__item');

            if(listItem) {
                const id = listItem.dataset.id;
                
                if (e.target.matches('.js-setback, .js-setback *')) {
                    const item = data.archive.find(id);
                    data.todoList.add(item.title, item.priority, item.category, item.status);
                    this.ControlTodo.initView(item);
                    data.archive.delete(id);
                    archiveView.deleteItem(id);
                    Storage.persist(data);

                };
            }
        });
    }

    categoryFormHandlers() {
        /**
            Category form Event listeners
        **/

        elements.category.addBtn.addEventListener("click", () => {
            eventCategoryAdd();
        });


        const eventCategoryAdd = () => {
            const value = elements.category.inputForm.value;

            this.ControlCategory.initModel(value);
            this.ControlCategory.initView();

            // Reset form
            elements.category.inputForm.value = "";
        }

    }

    categoryListHandlers() {
        /**
            Category list Event listeners
        **/

        elements.category.list.addEventListener("click", (e) => {
            e.preventDefault();
            const listItem = e.target.closest('.list__item');
            if(listItem) {
                const id = listItem.dataset.id;

                if (e.target.matches('.js-delete, .js-delete *')) {
                    // Delete from the state & ui
                    data.categories.delete(id);
                    Storage.persist(data);
                    categorieView.deleteItem(id);
                }
            
                if (e.target.matches('.js-title, .js-title *')) {
                    let newValue;
                    e.target.closest('.js-title').addEventListener('focusout', () => {
                        newValue = e.target.closest('.js-title').textContent;
                        data.categories.changeTitle(id, newValue);
                        Storage.persist(data);
                    })
                }

            }
            
        });

    }

    init() {
        this.todoFormHandlers();
        this.todoListHandlers();
        this.categoryFormHandlers();
        this.categoryListHandlers();
        this.archiveListHandlers();
    }
}
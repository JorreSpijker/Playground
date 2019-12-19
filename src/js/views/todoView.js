import { elements } from "./base";

export const renderListItem = (todo) => {

    const categories = data.categories.items;
    const markup = `
                    <li class="list__item" data-id="${todo.id}">
                        <input class="js-check" type="checkbox" name="check" value="check" ${todo.status ? 'checked': ''}>
                        <span class="js-title" contenteditable>${todo.title}</span>
                        <select name="category" class="todoform__category js-category">
                            ${categories.map((item) => `
                                <option value="${item.title}" ${todo.category === item.title ? 'selected' : ''}>${item.title}</option>
                            `).join('')}
                        </select>
                        <select name="priority" class="form__priority js-priority">
                            <option value="1" ${todo.priority === '1' ? 'selected' : ''}>1</option>
                            <option value="2" ${todo.priority === '2' ? 'selected' : ''}>2</option>
                            <option value="3" ${todo.priority === '3' ? 'selected' : ''}>3</option>
                            <option value="4" ${todo.priority === '4' ? 'selected' : ''}>4</option>
                        </select>
                        <a class="js-archive" href="#">Archiveren</a>
                        <a class="js-delete" href="#">Delete</a>
                    </li>`;
    elements.todo.list.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};
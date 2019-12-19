import { elements } from "./base";

export const renderListItem = category => {
    const markup = `
                    <li class="list__item" data-id="${category.id}">
                        <span class="js-title" contenteditable>${category.title}</span>
                        <a class="js-delete" href="#">
                            Delete
                        </a>
                    </li>`;
    elements.category.list.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};
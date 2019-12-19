import { elements } from "./base";

export const renderListItem = (archive) => {

    const markup = `
                    <li class="list__item" data-id="${archive.id}">
                        <input type="checkbox" name="check" value="check" ${archive.status ? 'checked': ''} disabled>
                        <span>${archive.title}</span>
                        <span>${archive.category}</span>
                        <span>${archive.priority}</span>
                        <a href="#" class="js-setback">Terugzetten</a>
                    </li>`;
    elements.archive.list.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};
import { elements } from './base';
import { CONFIG } from '../config';

export const renderListItem = (item) => {
    const markup = `<option value="${item.title}" ${item.title === CONFIG.settings.categories.default ? 'selected' : ''}>${item.title}</option>`;
    elements.todo.categoryForm.insertAdjacentHTML("afterbegin", markup);
}
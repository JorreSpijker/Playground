/**
    LocalStorage
*/

export const persist = (data) => {
    localStorage.setItem('todo-items', JSON.stringify(data.todoList.items));
    localStorage.setItem('category-items', JSON.stringify(data.categories.items));
    localStorage.setItem('archive-items', JSON.stringify(data.archive.items));
}

export const read = (data) => {
    const todoStorage = JSON.parse(localStorage.getItem('todo-items'));
    const categoryStorage = JSON.parse(localStorage.getItem('category-items'));
    const archiveStorage = JSON.parse(localStorage.getItem('archive-items'));

    // Restore data from localStorage
    if (todoStorage) data.todoList.items = todoStorage;
    if (categoryStorage) data.categories.items = categoryStorage;
    if (archiveStorage) data.archive.items = archiveStorage;
}
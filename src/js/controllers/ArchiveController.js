import * as archiveView from '../views/archiveView';

/**
    ARCHIVE CONTROLLER
**/

export default class ArchiveController {
    constructor() {
        this.data = data;
    }

    find(id) {
        const findResult = this.data.archive.find(id);
        return findResult;
    }

    initView(item) {
        archiveView.renderListItem(item);
    }
};
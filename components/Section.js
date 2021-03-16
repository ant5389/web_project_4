export default class Section {
    constructor({ data, renderer }, containerSelector, api) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._api = api;
    }

    prependItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.append(element);
    }

    refreshItems() {
        this._api.getCardList().then(res => {
            this._renderedItems = res;
            this.renderItems();
        })
    }
}
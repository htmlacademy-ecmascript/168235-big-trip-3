import { createElement } from '../render.js';

function createListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

class ListView {
  #element = null;
  getTemplate() {
    return createListTemplate();
  }

  getElement() {
    if (this.#element === null) {
      const template = this.getTemplate();
      this.#element = createElement(template);
    }
    return this.#element;
  }
}

export default ListView;

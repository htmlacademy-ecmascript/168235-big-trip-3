import { createElement } from '../render.js';

class AbstractView {
  #element = null;

  get element() {
    if (this.#element === null) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error('Метод не реализован: наследник должен переопределить get template');
  }
}

export default AbstractView;

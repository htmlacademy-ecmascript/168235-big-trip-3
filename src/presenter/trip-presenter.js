import ListView from '../view/list-view.js';
import {render, RenderPosition} from '../render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointCreationView from '../view/point-creation-view.js';

const POINT_COUNT = 3;

class TripPresenter {
  #container = null;
  #listView = new ListView();
  #pointEditView = new PointEditView();
  #pointCreationView = new PointCreationView();
  constructor(container) {
    this.#container = container;
  }

  init() {
    render(this.#listView, this.#container);
    const listElement = this.#listView.getElement();
    for (let i = 0; i < POINT_COUNT; i++) {
      const pointView = new PointView();
      render(pointView, listElement);
    }
    render(this.#pointCreationView,listElement, RenderPosition.AFTERBEGIN);
    render(this.#pointEditView, listElement, RenderPosition.AFTERBEGIN);
  }
}

export default TripPresenter;

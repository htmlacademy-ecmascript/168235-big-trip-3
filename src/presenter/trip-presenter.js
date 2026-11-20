import ListView from '../view/list-view.js';
import {render} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';

class TripPresenter {
  #container = null;
  #pointsModel = null;
  #listView = new ListView();
  #sortView = new SortView();
  #pointPresenters = new Map();

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    if (this.#pointsModel.points.length === 0) {
      render(new ListEmptyView(), this.#container);
      return;
    }

    render(this.#sortView, this.#container);
    render(this.#listView, this.#container);

    this.#pointsModel.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listView.element,
      pointsModel: this.#pointsModel
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }
}

export default TripPresenter;

import ListView from '../view/list-view.js';
import {render} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem, sorting} from '../utils.js';
import {SortType} from '../const.js';

class TripPresenter {
  #container = null;
  #pointsModel = null;
  #points = [];
  #listView = new ListView();
  #sortView = null;
  #currentSortType = SortType.DAY;
  #pointPresenters = new Map();

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    if (this.#points.length === 0) {
      this.#renderEmptyList();
      return;
    }

    this.#sortPoints(this.#currentSortType);
    this.#renderSort();
    render(this.#listView, this.#container);

    this.#renderPoints();
  }

  #renderEmptyList() {
    render(new ListEmptyView(), this.#container);
  }

  #sortPoints(sortType) {
    this.#currentSortType = sortType;
    this.#points = sorting[sortType](this.#points);
  }

  #renderSort() {
    this.#sortView = new SortView({onSortTypeChange: this.#handleSortTypeChange});
    render(this.#sortView, this.#container);
  }

  #renderPoints() {
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listView.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPoints();
  };
}

export default TripPresenter;

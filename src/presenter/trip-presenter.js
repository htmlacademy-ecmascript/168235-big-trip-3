import ListView from '../view/list-view.js';
import {render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

class TripPresenter {
  #container = null;
  #pointsModel = null;
  #listView = new ListView();

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    render(this.#listView, this.#container);

    this.#pointsModel.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const destinations = this.#pointsModel.destinations;
    const destination = this.#pointsModel.getDestinationById(point.destination);
    const availableOffers = this.#pointsModel.getOffersByType(point.type);
    const selectedOffers = availableOffers.filter((offer) => point.offers.includes(offer.id));

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeForm();
      }
    };

    const pointView = new PointView({
      point,
      destination,
      selectedOffers,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditView = new PointEditView({
      point,
      destination,
      destinations,
      availableOffers,
      onFormSubmit: closeForm,
      onRollupClick: closeForm
    });

    function replacePointToForm() {
      replace(pointEditView, pointView);
    }

    function replaceFormToPoint() {
      replace(pointView, pointEditView);
    }

    function closeForm() {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointView, this.#listView.element);
  }
}

export default TripPresenter;

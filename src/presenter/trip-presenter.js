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

    const pointView = new PointView({
      point,
      destination,
      selectedOffers,
      onEditClick: replacePointToForm
    });
    const pointEditView = new PointEditView({point, destination, destinations, availableOffers});

    function replacePointToForm() {
      replace(pointEditView, pointView);
    }

    render(pointView, this.#listView.element);
  }
}

export default TripPresenter;

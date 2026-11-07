import ListView from '../view/list-view.js';
import {render, RenderPosition} from '../render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import { BLANK_POINT } from '../const.js';

class TripPresenter {
  #container = null;
  #pointsModel = null;
  #listView = new ListView();
  #pointEditView = null;
  #pointCreationView = null;

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    render(this.#listView, this.#container);
    const listElement = this.#listView.element;
    const points = this.#pointsModel.points;
    const destinations = this.#pointsModel.destinations;

    this.#pointCreationView = new PointEditView({
      availableOffers: this.#pointsModel.getOffersByType(BLANK_POINT.type),
      destinations
    });

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      const destination = this.#pointsModel.getDestinationById(point.destination);
      const availableOffers = this.#pointsModel.getOffersByType(point.type);

      if (i === 0) {
        this.#pointEditView = new PointEditView({point, destination, destinations, availableOffers});
      } else {
        const selectedOffers = availableOffers.filter((offer) => point.offers.includes(offer.id));
        render(new PointView({point, destination, selectedOffers}), listElement);
      }
    }
    render(this.#pointCreationView, listElement, RenderPosition.AFTERBEGIN);
    render(this.#pointEditView, listElement, RenderPosition.AFTERBEGIN);
  }
}

export default TripPresenter;

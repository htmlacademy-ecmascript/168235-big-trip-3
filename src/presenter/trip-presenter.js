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
    const listElement = this.#listView.getElement();
    const points = this.#pointsModel.getPoints();
    const destinations = this.#pointsModel.getDestinations();
    const offers = this.#pointsModel.getOffers();
    const defaultOfferGroup = offers.find((offerGroup) => offerGroup.type === BLANK_POINT.type);
    this.#pointCreationView = new PointEditView({availableOffers: defaultOfferGroup.offers, destinations});

    for (let i = 0; i < points.length; i++) {
      const destination = destinations.find((item) => points[i].destination === item.id);
      const offerGroup = offers.find((item) => points[i].type === item.type);
      if (i === 0) {
        this.#pointEditView = new PointEditView({point: points[i], destination, destinations, availableOffers: offerGroup.offers});
      } else {
        const selectedOffers = offerGroup.offers.filter((offer) => points[i].offers.includes(offer.id));
        const pointView = new PointView({point: points[i], destination, selectedOffers});
        render(pointView, listElement);
      }
    }
    render(this.#pointCreationView,listElement, RenderPosition.AFTERBEGIN);
    render(this.#pointEditView, listElement, RenderPosition.AFTERBEGIN);
  }
}

export default TripPresenter;

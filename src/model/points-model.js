import { pickRandomPoints } from '../mock/points.js';
import { MOCK_DESTINATIONS } from '../mock/destinations.js';
import { MOCK_OFFERS } from '../mock/offers.js';

const POINT_COUNT = 3;

class PointsModel {
  #points = pickRandomPoints(POINT_COUNT);
  #destinations = MOCK_DESTINATIONS;
  #offers = MOCK_OFFERS;

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }

  getOffersByType(type) {
    const offerGroup = this.#offers.find((group) => group.type === type);

    return offerGroup ? offerGroup.offers : [];
  }
}

export default PointsModel;

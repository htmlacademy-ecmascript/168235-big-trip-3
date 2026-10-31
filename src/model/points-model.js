import {getRandomPoint} from '../mock/points.js';
import { mockDestinations } from '../mock/destination.js';
import { mockOffers } from '../mock/offers.js';
const POINT_COUNT = 3;

class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #destinations = mockDestinations;
  #offers = mockOffers;

  getPoints() {
    return this.#points;
  }

  getDestinations() {
    return this.#destinations;
  }

  getOffers() {
    return this.#offers;
  }
}

export default PointsModel;

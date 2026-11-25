const PointType = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

const BLANK_POINT = {
  dateFrom: null,
  dateTo: null,
  offers: [],
  type: PointType.FLIGHT,
  id: null,
  destination: null,
  basePrice: 0,
  isFavorite: false
};

const BLANK_DESTINATION = {
  id: null,
  name: '',
  description: '',
  pictures: []
};

const ROLLUP_BUTTON_CLASS = 'event__rollup-btn';
const FAVORITE_BUTTON_CLASS = 'event__favorite-btn';

export {PointType, FilterType, SortType, BLANK_POINT, BLANK_DESTINATION, ROLLUP_BUTTON_CLASS, FAVORITE_BUTTON_CLASS};

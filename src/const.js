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

export {PointType, BLANK_POINT, BLANK_DESTINATION};

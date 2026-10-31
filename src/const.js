const POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];
const BLANK_POINT = {
  dateFrom: null,
  dateTo: null,
  offers: [],
  type: POINT_TYPES[0],
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

export {POINT_TYPES, BLANK_POINT, BLANK_DESTINATION};

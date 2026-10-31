import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    id: '15',
    type: 'taxi',
    destination: '49',
    offers: ['3'],
    basePrice: 1000,
    isFavorite: true,
    dateFrom: '2026-10-26T01:40:05',
    dateTo: '2026-10-26T09:30'
  },
  {
    id: '16',
    type: 'flight',
    destination: '13',
    offers: ['5'],
    basePrice: 1000,
    isFavorite: true,
    dateFrom: '2026-09-26T01:40:05',
    dateTo: '2026-09-26T09:30'
  },
  {
    id: '17',
    type: 'sightseeing',
    destination: '14',
    offers: [],
    basePrice: 0,
    isFavorite: false,
    dateFrom: '2026-09-26T01:00:05',
    dateTo: '2026-09-26T02:00'
  },
  {
    id: '18',
    type: 'bus',
    destination: '50',
    offers: [],
    basePrice: 55,
    isFavorite: false,
    dateFrom: '2026-10-27T08:00',
    dateTo: '2026-10-27T11:15'
  },
  {
    id: '19',
    type: 'train',
    destination: '51',
    offers: ['7'],
    basePrice: 90,
    isFavorite: true,
    dateFrom: '2026-10-27T12:00',
    dateTo: '2026-10-27T15:40'
  },
  {
    id: '20',
    type: 'ship',
    destination: '15',
    offers: ['8'],
    basePrice: 240,
    isFavorite: false,
    dateFrom: '2026-10-27T18:00',
    dateTo: '2026-10-29T22:30'
  },
  {
    id: '21',
    type: 'drive',
    destination: '52',
    offers: ['9'],
    basePrice: 160,
    isFavorite: false,
    dateFrom: '2026-10-30T08:00',
    dateTo: '2026-10-30T12:20'
  },
  {
    id: '22',
    type: 'check-in',
    destination: '53',
    offers: ['11'],
    basePrice: 180,
    isFavorite: true,
    dateFrom: '2026-10-30T14:00',
    dateTo: '2026-10-31T11:00'
  },
  {
    id: '23',
    type: 'restaurant',
    destination: '54',
    offers: ['12'],
    basePrice: 65,
    isFavorite: false,
    dateFrom: '2026-10-30T19:00',
    dateTo: '2026-10-30T20:30'
  },
  {
    id: '24',
    type: 'taxi',
    destination: '55',
    offers: ['3', '4'],
    basePrice: 35,
    isFavorite: true,
    dateFrom: '2026-11-01T09:00',
    dateTo: '2026-11-01T09:25'
  },
  {
    id: '25',
    type: 'flight',
    destination: '15',
    offers: ['5', '10'],
    basePrice: 320,
    isFavorite: false,
    dateFrom: '2026-11-01T11:30',
    dateTo: '2026-11-01T14:45'
  },
  {
    id: '26',
    type: 'sightseeing',
    destination: '15',
    offers: [],
    basePrice: 20,
    isFavorite: false,
    dateFrom: '2026-11-01T16:00',
    dateTo: '2026-11-01T18:00'
  }
];

const getRandomPoint = () => {
  const randomPoint = getRandomArrayElement(mockPoints);
  return {...randomPoint, id:crypto.randomUUID()};
};

export {mockPoints, getRandomPoint};

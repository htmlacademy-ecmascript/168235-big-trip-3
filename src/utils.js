import dayjs from 'dayjs';
import {FilterType, SortType} from './const.js';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';
const DURATION_PART_LENGTH = 2;
const DURATION_PART_PAD_SYMBOL = '0';

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function humanizePointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizePointTime(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function humanizePointDateTime(date) {
  return date ? dayjs(date).format(DATE_TIME_FORMAT) : '';
}

function formatDurationPart(value) {
  return String(value).padStart(DURATION_PART_LENGTH, DURATION_PART_PAD_SYMBOL);
}

function calcPointDuration(dateFrom, dateTo) {
  const durationInMinutes = dayjs(dateTo).diff(dateFrom, 'minute');
  const minutes = durationInMinutes % MINUTES_IN_HOUR;
  const totalHours = Math.floor(durationInMinutes / MINUTES_IN_HOUR);
  const days = Math.floor(totalHours / HOURS_IN_DAY);
  const hours = totalHours % HOURS_IN_DAY;
  if (days > 0) {
    return `${formatDurationPart(days)}D ${formatDurationPart(hours)}H ${formatDurationPart(minutes)}M`;
  }
  if (hours > 0) {
    return `${formatDurationPart(hours)}H ${formatDurationPart(minutes)}M`;
  }
  return `${formatDurationPart(minutes)}M`;
}

function isPointFuture(point) {
  return dayjs(point.dateFrom).isAfter(dayjs());
}

function isPointPast(point) {
  return dayjs(point.dateTo).isBefore(dayjs());
}

function isPointPresent(point) {
  return !dayjs(point.dateFrom).isAfter(dayjs()) && !dayjs(point.dateTo).isBefore(dayjs());
}

function sortPointsByDay(pointA, pointB) {
  return dayjs(pointA.dateFrom).diff(pointB.dateFrom);
}

function getPointDuration(point) {
  return dayjs(point.dateTo).diff(point.dateFrom);
}

function sortPointsByTime(pointA, pointB) {
  return getPointDuration(pointB) - getPointDuration(pointA);
}

function sortPointsByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter(isPointFuture),
  [FilterType.PRESENT]: (points) => points.filter(isPointPresent),
  [FilterType.PAST]: (points) => points.filter(isPointPast),
};

const sorting = {
  [SortType.DAY]: (points) => [...points].sort(sortPointsByDay),
  [SortType.TIME]: (points) => [...points].sort(sortPointsByTime),
  [SortType.PRICE]: (points) => [...points].sort(sortPointsByPrice),
};

export {capitalize, humanizePointDate, humanizePointTime, calcPointDuration, humanizePointDateTime, filter, sorting, updateItem};

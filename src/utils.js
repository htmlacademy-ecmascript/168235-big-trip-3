import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';

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
  return String(value).padStart(2, '0');
}

function getPointDuration(dateFrom, dateTo) {
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

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {getRandomArrayElement, humanizePointDate, humanizePointTime, getPointDuration, humanizePointDateTime};

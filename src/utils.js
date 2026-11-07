import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';
const DURATION_PART_LENGTH = 2;
const DURATION_PART_PAD_SYMBOL = '0';

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

export {humanizePointDate, humanizePointTime, calcPointDuration, humanizePointDateTime};

import dayjs from 'dayjs';

/**
 * Checks if the event passed in is in the future from this moment
 * @param: { node } - event from GraphQL / Contentful
 * @returns boolean
 */
const isInFuture = ({ node }) => {
  // data comes from graphql node specifically
  const futureDate = node.endDate || node.date;
  const afterNow = dayjs(futureDate).isAfter(dayjs());
  return afterNow;
};

const isHappeningNow = (event) => {
  const hasStarted = dayjs().isAfter(event.date, 'day');
  const hasEnded = dayjs().isAfter(event.endDate, 'day');
  return hasStarted && !hasEnded;
}

/**
 * Generates a date text
 * @param: { node } - event from GraphQL / Contentful
 * @returns string
 */
const getDateText = (event) => {
  return event.endDate && !endDateMatchesStartDate(event)
    ? `${shortDateFormat(event.date)} - ${shortDateFormat(event.endDate)}`
    : `${dateTimeFormat(event.date)}`;
};

/**
 * Checks if the end date matches the beginning date
 * @param: { node } - event from GraphQL / Contentful
 * @returns boolean
 */
const endDateMatchesStartDate = (event) =>
  event.endDate ? dayjs(event.date).isSame(event.endDate, 'day') : false;

// date formatting utils
export const shortDateFormat = (date) => dayjs(date).format('MMMM D, YYYY');
export const dateTimeFormat = (date) =>
  dayjs(date).format('MMMM D, YYYY [at] hh:mm A');
export const longDateFormat = (date) =>
  dayjs(date).format('dddd, MMMM D, YYYY [at] hh:mm A');

export default {
  isInFuture,
  isHappeningNow,
  getDateText,
};

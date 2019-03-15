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

/**
 * Generates a date text
 * @param: { node } - event from GraphQL / Contentful
 * @returns string
 */
const getDateText = (node) => {
  return node.endDate && !endDateMatchesStartDate
    ? `${dayjs(node.date).format('MMMM D, YYYY')} - ${dayjs(
        node.endDate
      ).format('MMMM D, YYYY')}`
    : `${dayjs(node.date).format('MMMM D, YYYY [at] hh:mm A')}`;
};

/**
 * Checks if the end date matches the beginning date
 * @param: { node } - event from GraphQL / Contentful
 * @returns boolean
 */
const endDateMatchesStartDate = ({ node }) =>
  node.endDate ? dayjs(node.date).isSame(node.endDate, 'day') : false;

export default {
  isInFuture,
  getDateText,
};

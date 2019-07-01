import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

import slugify from '../../../scripts/slugify';
import dayUtil from '../../utils/day';
import Button from '../Button';

import * as Styled from './EventCard.styles';

export const EventCard = ({ event }) => {
  const dateText = dayUtil.getDateText(event);

  const isHappeningNow = dayUtil.isHappeningNow(event);

  const { date, eventName, eventImage, eventSummary } = event;
  const eventLink = `/events/${dayjs(date).format('YYYY/MM')}/${slugify(
    eventName
  )}`;

  return (
    <Styled.EventContainer>
      <Styled.EventImageContainer>
        <Styled.EventImage src={eventImage.fluid.src} alt={eventImage.title} />
      </Styled.EventImageContainer>
      <Styled.EventInfoContainer>
        <Link to={eventLink}>
          <Styled.EventTitle as="h2">{eventName}</Styled.EventTitle>
        </Link>
        <Styled.EventDateText as="small">{dateText}</Styled.EventDateText>
        { isHappeningNow && (
          <Styled.EventInProgress as="small">Happening now</Styled.EventInProgress>
        )}
        <Styled.EventSummary>{eventSummary}</Styled.EventSummary>
        <Link to={eventLink}>
          <Button small>View Details</Button>
        </Link>
      </Styled.EventInfoContainer>
    </Styled.EventContainer>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};

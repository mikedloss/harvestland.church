import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import slugify from '../../../scripts/slugify';
import { Heading, Text, Box, Flex, Image } from 'rebass';

import * as Styles from './EventCard.styles';

export const EventCard = (props) => {
  // const { title, speaker, date, audioUrl, audio } = props.data;
  const {
    eventName,
    date,
    eventLocation,
    eventImage,
    eventSummary,
  } = props.data;
  const { currentPath } = props;
  return (
    <Styles.EventCardStyle mt="0" mb="8px" mx="auto" p="1rem">
      <Styles.EventContainer>
        <Styles.EventImageContainer width="50%">
          <Styles.EventImage
            src={eventImage.fluid.src}
            alt={eventImage.title}
          />
        </Styles.EventImageContainer>
        <Flex
          flexDirection="column"
          justifyContent="center"
          p="2rem"
          width="50%"
        >
          <Link to={`/events/${slugify(eventName)}`}>
            <Heading>{eventName}</Heading>
          </Link>
          <Text fontSize={1}>{eventSummary}</Text>
        </Flex>
      </Styles.EventContainer>
      {/* <Styles.SermonInfoContainer mb="1rem">
        <Styles.SermonDate fontSize={1} color="#888">
          {dayjs(date).format('MMMM DD, YYYY')}
        </Styles.SermonDate>
        <Styles.SermonTitle>
          {currentPath === 'sermons' ? (
            <Link to={`/sermons/${slugify(date, '/')}/${slugify(title)}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Styles.SermonTitle>
        <Styles.SermonSpeaker fontSize={2}>{speaker}</Styles.SermonSpeaker>
      </Styles.SermonInfoContainer>
      {(audio || audioUrl) && (
        <Styles.SermonAudio controls>
          <source src={audio.file.url || audioUrl} type="audio/mpeg" />
        </Styles.SermonAudio>
      )}
      {verses && (
        <Styles.SermonVerses fontSize={1}>
          Verses:{' '}
          {verses.map((verse, index) => (
            <span key={index}>
              <Verse verse={verse} />
              {index === verses.length - 1 ? '' : ', '}
            </span>
          ))}
        </Styles.SermonVerses>
      )} */}
    </Styles.EventCardStyle>
  );
};

EventCard.propTypes = {
  // data: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   speaker: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  //   audioUrl: PropTypes.string,
  //   verses: PropTypes.string,
  //   audio: PropTypes.object,
  // }),
  currentPath: PropTypes.string.isRequired,
};

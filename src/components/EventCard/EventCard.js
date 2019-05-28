import React from 'react';
import { Heading, Text, Flex } from 'rebass';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import slugify from '../../../scripts/slugify';

import * as Styled from './EventCard.styles';

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
    <Styled.EventCardStyle mt="0" mb="8px" mx="auto" p="1rem">
      <Styled.EventContainer>
        <Styled.EventImageContainer width="50%">
          <Styled.EventImage
            src={eventImage.fluid.src}
            alt={eventImage.title}
          />
        </Styled.EventImageContainer>
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
      </Styled.EventContainer>
      {/* <Styled.SermonInfoContainer mb="1rem">
        <Styled.SermonDate fontSize={1} color="#888">
          {dayjs(date).format('MMMM DD, YYYY')}
        </Styled.SermonDate>
        <Styled.SermonTitle>
          {currentPath === 'sermons' ? (
            <Link to={`/sermons/${slugify(date, '/')}/${slugify(title)}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Styled.SermonTitle>
        <Styled.SermonSpeaker fontSize={2}>{speaker}</Styled.SermonSpeaker>
      </Styled.SermonInfoContainer>
      {(audio || audioUrl) && (
        <Styled.SermonAudio controls>
          <source src={audio.file.url || audioUrl} type="audio/mpeg" />
        </Styled.SermonAudio>
      )}
      {verses && (
        <Styled.SermonVerses fontSize={1}>
          Verses:{' '}
          {verses.map((verse, index) => (
            <span key={index}>
              <Verse verse={verse} />
              {index === verses.length - 1 ? '' : ', '}
            </span>
          ))}
        </Styled.SermonVerses>
      )} */}
    </Styled.EventCardStyle>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import slugify from '../../../scripts/slugify';

import * as Styled from './SermonCard.styles';
import { Verse } from '../Verse';

export const SermonCard = (props) => {
  const { title, speaker, date, audioUrl, audio } = props.data;
  const { currentPath } = props;
  const verses = props.data.verses && props.data.verses.split(', ');
  return (
    <Styled.SermonCardStyle
      width={['100%', '70%', '50%']}
      mt="0"
      mb="8px"
      mx="auto"
      p="1rem"
      onClick={props.onClick}
    >
      <Styled.SermonInfoContainer mb="1rem">
        <Styled.SermonDate fontSize={1} color="#888">
          {dayjs(date).format('MMMM DD, YYYY')}
        </Styled.SermonDate>
        <Styled.SermonTitle>
          {currentPath === 'sermonList' ? (
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
      )}
    </Styled.SermonCardStyle>
  );
};

SermonCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    audioUrl: PropTypes.string,
    verses: PropTypes.string,
    audio: PropTypes.object,
  }),
  currentPath: PropTypes.string.isRequired,
};

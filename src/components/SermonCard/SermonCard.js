import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import slugify from '../../../scripts/slugify';

import * as Styles from './SermonCard.style';

export const SermonCard = (props) => {
  const { title, speaker, date, audioUrl, verses, audio } = props.data;
  const { currentPath } = props;
  return (
    <Styles.SermonCardStyle
      width={[1, 1 / 2]}
      mt="0"
      mb="8px"
      mx="auto"
      p="1rem"
      onClick={props.onClick}
    >
      <Styles.SermonInfoContainer mb="16px">
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
        <Styles.SermonVerses fontSize={1}>Verses: {verses}</Styles.SermonVerses>
      )}
    </Styles.SermonCardStyle>
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

import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

import * as Styles from './SermonCard.style';

export const SermonCard = (props) => {
  const { title, speaker, date, audioUrl, verses, audio } = props.data;
  // debugger;
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
        <Styles.SermonTitle>{title}</Styles.SermonTitle>
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

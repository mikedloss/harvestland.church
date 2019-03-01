import React from 'react';
import dayjs from 'dayjs';

import * as Styles from './SermonCard.style';

export const SermonCard = (props) => {
  console.log(props);
  const { title, speaker, date, audioUrl, verses } = props.data;
  return (
    <Styles.SermonCardStyle
      width={[1, 1/2]}
      mt="0"
      mb="8px"
      mx="auto"
      p="1rem"
      onClick={props.onClick}
    >
      <Styles.SermonInfoContainer mb="16px">
        <Styles.SermonDate fontSize={1} color="#888">
          { dayjs(date).format("MMMM DD, YYYY") }
        </Styles.SermonDate>
        <Styles.SermonTitle>
          { title }
        </Styles.SermonTitle>
        <Styles.SermonSpeaker fontSize={2}>
          { speaker }
        </Styles.SermonSpeaker>
      </Styles.SermonInfoContainer>
      <Styles.SermonAudio controls>
        <source src={audioUrl} type="audio/mpeg" />
      </Styles.SermonAudio>
      <Styles.SermonVerses fontSize={1}>
        Verses: { verses }
      </Styles.SermonVerses>
    </Styles.SermonCardStyle>
  )
}
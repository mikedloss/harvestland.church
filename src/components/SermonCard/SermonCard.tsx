import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import slugify from '../../../scripts/slugify';

import * as Styled from './SermonCard.styles';
import { Verse } from '../Verse';

export interface SermonCardData {
  title: string;
  speaker: string;
  date: string;
  audioUrl?: string;
  videoUrl?: string;
  verses?: string;
  audio: any;
}

export interface SermonCardProps {
  data: SermonCardData;
  currentPath: string;
  onClick?: () => void;
}

export const SermonCard: React.FC<SermonCardProps> = (props) => {
  const { title, speaker, date, audioUrl, audio, videoUrl } = props.data;
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
      {videoUrl ? (
        <Styled.SermonVideoLink>
          <a href={videoUrl} target="_blank">
            Watch on Facebook
          </a>
        </Styled.SermonVideoLink>
      ) : (
        <>
          {(audio || audioUrl) && (
            <Styled.SermonAudio controls>
              <source src={audio.file.url || audioUrl} type="audio/mpeg" />
            </Styled.SermonAudio>
          )}
        </>
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

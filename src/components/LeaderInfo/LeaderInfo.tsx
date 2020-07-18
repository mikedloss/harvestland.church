import React from 'react';
import { Text, Heading } from 'rebass';

import { Leader } from '../../types';

import * as Styled from './LeaderInfo.styles';

export interface LeaderInfoProps {
  who: Leader;
}

export const LeaderInfo: React.FC<LeaderInfoProps> = ({ who }) => {
  return (
    <Styled.LeaderInfoStyle>
      <Styled.PictureContainer>
        <Styled.LeaderPicture src={who.picture.src} alt={who.picture.title} />
      </Styled.PictureContainer>
      <Styled.LeaderDescription>
        <Heading>{who.name}</Heading>
        {who.jobs.map((job, index) => (
          <Text key={index} fontSize={1}>
            {job}
          </Text>
        ))}
      </Styled.LeaderDescription>
    </Styled.LeaderInfoStyle>
  );
};

import React from 'react';
import { Text, Heading } from 'rebass';

import * as Styled from './LeaderInfo.styles';

export interface Who {
  name: string;
  jobs: string[];
  picture: any;
}

export interface LeaderInfoProps {
  who: Who;
}

export const LeaderInfo: React.FC<LeaderInfoProps> = ({ who }) => {
  const { src } = who.picture.fluid;
  return (
    <Styled.LeaderInfoStyle>
      <Styled.PictureContainer>
        <Styled.LeaderPicture src={src} />
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

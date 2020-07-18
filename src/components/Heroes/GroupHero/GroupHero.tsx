import React from 'react';
import { Heading, Text, Flex } from 'rebass';

import { ImageHero } from '../ImageHero';
import * as Styled from './GroupHero.styles';

export interface GroupHeroProps {
  imageSrc: string;
  imageDesc: string;
  groupName: string;
  groupFrequency: string;
}

export const GroupHero: React.FC<GroupHeroProps> = ({
  imageSrc,
  imageDesc,
  groupName,
  groupFrequency,
  children,
}) => (
  <ImageHero
    imageSrc={imageSrc}
    imageDesc={imageDesc}
    height={['50vh', '40vh']}
    textAlign="flex-start"
    textJustify="flex-start"
    opacity="0.5"
  >
    <Styled.HeroContentContainer alignItems="center" justifyContent="center">
      <Flex flexDirection="column" alignItems="center" width="100%" mb="1rem">
        <Heading fontSize={[4, 6]}>{groupName}</Heading>
        {children && <Text fontSize={[1, 3]}>{children}</Text>}
      </Flex>
    </Styled.HeroContentContainer>
  </ImageHero>
);

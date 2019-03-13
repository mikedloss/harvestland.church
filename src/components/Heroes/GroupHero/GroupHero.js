import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './GroupHero.styles';

export const GroupHero = ({
  imageSrc,
  groupName,
  groupFrequency,
  children,
}) => (
  <ImageHero
    imageSrc={imageSrc}
    height="40vh"
    textAlign="flex-start"
    textJustify="flex-start"
    opacity="0.5"
  >
    <HeroContentContainer alignItems="center">
      <Flex
        flexDirection="column"
        alignItems={['center', 'flex-start']}
        width={['100%', '50%']}
        mb="1rem"
      >
        <Heading fontSize={[4, 6]}>{groupName}</Heading>
        <Text fontSize={[1, 3]}>Meets {groupFrequency}</Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems={['center', 'flex-start']}
        width={['100%', '50%']}
      >
        <Text>{children}</Text>
      </Flex>
    </HeroContentContainer>
  </ImageHero>
);

GroupHero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupFrequency: PropTypes.string.isRequired,
  children: PropTypes.node,
};

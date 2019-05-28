import React from 'react';
import PropTypes from 'prop-types';
import { Text, Heading } from 'rebass';

import { leaders } from './leaders';
import * as Styled from './LeaderInfo.styles';

export const LeaderInfo = ({ who, imageSrc, children }) => {
  const leader = leaders[who];
  return (
    <Styled.LeaderInfoStyle>
      <Styled.PictureContainer>
        <Styled.LeaderPicture src={imageSrc.childImageSharp.fluid.src} />
      </Styled.PictureContainer>
      <Styled.LeaderDescription>
        <Heading>{leader.name}</Heading>
        {leader.jobs.map((job, index) => (
          <Text key={index} fontSize={1}>
            {job}
          </Text>
        ))}
        <Text as="a" href={`mailto:${leader.email}`} fontSize={1}>
          {leader.email}
        </Text>
        {children}
      </Styled.LeaderDescription>
    </Styled.LeaderInfoStyle>
  );
};

LeaderInfo.propTypes = {
  who: PropTypes.string.isRequired,
  imageSrc: PropTypes.object.isRequired,
  children: PropTypes.node,
};

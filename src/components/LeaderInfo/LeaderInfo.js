import React from 'react';
import PropTypes from 'prop-types';
import { Text, Heading } from 'rebass';

import { leaders } from './leaders';
import * as Styles from './LeaderInfo.styles';

export const LeaderInfo = ({ who, imageSrc, children }) => {
  const leader = leaders[who];
  return (
    <Styles.LeaderInfoStyle>
      <Styles.PictureContainer>
        <Styles.LeaderPicture src={imageSrc.childImageSharp.fluid.src} />
      </Styles.PictureContainer>
      <Styles.LeaderDescription>
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
      </Styles.LeaderDescription>
    </Styles.LeaderInfoStyle>
  );
};

LeaderInfo.propTypes = {
  who: PropTypes.string.isRequired,
  imageSrc: PropTypes.object.isRequired,
  children: PropTypes.node,
};

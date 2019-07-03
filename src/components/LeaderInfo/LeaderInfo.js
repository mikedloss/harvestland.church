import React from 'react';
import PropTypes from 'prop-types';
import { Text, Heading } from 'rebass';

import * as Styled from './LeaderInfo.styles';

export const LeaderInfo = ({ who }) => {
  const { imageSrc: src } = who.picture.fluid;
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
        <Text as="a" href={`mailto:${who.email}`} fontSize={1}>
          {who.email}
        </Text>
      </Styled.LeaderDescription>
    </Styled.LeaderInfoStyle>
  );
};

LeaderInfo.propTypes = {
  who: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.string).isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
  }),
};

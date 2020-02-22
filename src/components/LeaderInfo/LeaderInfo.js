import React from "react";
import PropTypes from "prop-types";
import { Text, Heading } from "rebass";

import * as Styled from "./LeaderInfo.styles";

export const LeaderInfo = ({ who }) => {
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

LeaderInfo.propTypes = {
  who: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.string).isRequired,
    picture: PropTypes.object.isRequired
  })
};

import React from "react";
import PropTypes from "prop-types";
import { Heading, Text, Flex } from "rebass";

import { ImageHero } from "../ImageHero";
import * as Styled from "./GroupHero.styles";

export const GroupHero = ({
  imageSrc,
  imageDesc,
  groupName,
  groupFrequency,
  children
}) => (
  <ImageHero
    imageSrc={imageSrc}
    imageDesc={imageDesc}
    height={["50vh", "40vh"]}
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

GroupHero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageDesc: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupFrequency: PropTypes.string.isRequired,
  children: PropTypes.node
};

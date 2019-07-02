import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex } from 'rebass';

import ImageHero from '../ImageHero';

import * as Styled from './VideoHero.styles';
import * as Media from '../../Elements/media';

export const VideoHero = ({ text, videoSrc, imageSrc, imageHeight }) => {
  return (
    <Styled.VideoHeroStyle>
      <Styled.MediaContainer>
        <Media.SmallOnly>
          <ImageHero imageSrc={imageSrc} height={imageHeight} opacity="0.5">
            <Flex flexDirection="column" alignItems="center" justifyContent="center" style={{ textAlign: 'center' }}>
              <Heading fontSize={6}>Welcome to Harvestland</Heading>
            </Flex>
          </ImageHero>
        </Media.SmallOnly>
        <Media.NotSmall>
          <Styled.Video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </Styled.Video>
          <Styled.TextContainer>
            <Styled.TextOverlay alignItems="center" justifyContent="center">
              <Styled.WelcomeText fontSize={[6, 7]}>
                {text || 'Hero Text'}
              </Styled.WelcomeText>
            </Styled.TextOverlay>
          </Styled.TextContainer>
        </Media.NotSmall>
      </Styled.MediaContainer>
    </Styled.VideoHeroStyle>
  );
};

VideoHero.propTypes = {
  text: PropTypes.string,
  videoSrc: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
};

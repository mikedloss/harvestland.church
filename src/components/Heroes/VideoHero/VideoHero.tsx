import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Flex } from 'rebass';

import { ImageHero } from '../ImageHero';

import * as Styled from './VideoHero.styles';
import * as Media from '../../Elements/media';

export interface VideoHeroProps {
  fallbackImageSrc: string;
  fallbackImageHeight: string;
  fallbackImageContent: React.ReactNode;
  videoSrc: string;
}

export const VideoHero = ({
  videoSrc,
  fallbackImageSrc,
  fallbackImageHeight,
  fallbackImageContent,
  children,
}) => {
  return (
    <Styled.VideoHeroStyle>
      <Styled.MediaContainer>
        <Media.SmallOnly>
          <ImageHero
            imageSrc={fallbackImageSrc}
            height={fallbackImageHeight}
            opacity="0.5"
          >
            {fallbackImageContent || (
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{ textAlign: 'center' }}
              >
                <Heading fontSize={6}>Welcome to Harvestland</Heading>
              </Flex>
            )}
          </ImageHero>
        </Media.SmallOnly>
        <Media.NotSmall>
          <Styled.Video autoPlay loop muted height="720" width="1280">
            <source src={videoSrc} type="video/mp4" />
          </Styled.Video>
          <Styled.TextContainer>
            <Styled.TextOverlay alignItems="center" justifyContent="center">
              {children}
            </Styled.TextOverlay>
          </Styled.TextContainer>
        </Media.NotSmall>
      </Styled.MediaContainer>
    </Styled.VideoHeroStyle>
  );
};

VideoHero.propTypes = {
  fallbackImageSrc: PropTypes.string.isRequired,
  fallbackImageHeight: PropTypes.string,
  fallbackImageContent: PropTypes.node,
  videoSrc: PropTypes.string.isRequired,
};

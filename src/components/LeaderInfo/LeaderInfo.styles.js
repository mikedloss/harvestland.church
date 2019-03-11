import styled from 'styled-components';
import { Flex, Box, Image } from 'rebass';

import { breakpointValues as bp } from '../../components/Elements/theme';

export const LeaderInfoStyle = styled(Flex)`
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: ${bp.SMALL}px) {
    width: 80%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const PictureContainer = styled(Box)``;

PictureContainer.defaultProps = {
  width: ['100%', '50%'],
};

export const LeaderPicture = styled(Image)`
  width: 100%;
`;

export const LeaderDescription = styled(Flex)``;

LeaderDescription.defaultProps = {
  width: ['100%', '50%'],
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  p: ['1rem', '2rem'],
  mb: ['2rem', 0],
};

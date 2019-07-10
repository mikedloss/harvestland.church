import styled from 'styled-components';
import { Flex, Heading } from 'rebass';

import { breakpointValues as bp } from '../components/theme';
import ChevronRight from '../assets/svg/right-chevron.svg';
import LogoSVG from '../assets/svg/logo.svg';

export const ContentBlock = styled(Flex)`
  text-align: center;
`;
ContentBlock.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const WhiteLogo = styled(LogoSVG)`
  max-width: 90%;
  width: 300px;

  & path {
    fill: ${(props) => props.theme.colors.white};
  }

  @media screen and (min-width: ${bp.MEDIUM}px) {
    width: 100%;
  }
`;
// export const WhiteLogo = styled(Image)`
//   color: ${(props) => props.theme.colors.white};
//   max-width: 90%;
//   width: 300px;

//   @media screen and (min-width: ${bp.MEDIUM}px) {
//     width: 100%;
//   }
// `;

export const HoursText = styled(Heading)`
  line-height: 1.1;
`;

export const Chevron = styled(ChevronRight)`
  width: 12px;
  fill: ${(props) => props.theme.colors.primaryLight};
`;

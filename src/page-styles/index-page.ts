import styled from 'styled-components';
import { Flex, Heading } from 'rebass';

import { breakpointValues as bp } from '../components/theme';
import ChevronRight from '../assets/svg/right-chevron.svg';
import LogoSVG from '../assets/svg/logo.svg';

export const ContentBlock = styled(Flex).attrs({
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})`
  text-align: center;
`;

export const WhiteLogo = styled(LogoSVG)`
  max-width: 90%;
  width: 300px;

  & path {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${bp.MEDIUM}px) {
    width: 100%;
  }
`;

export const HoursText = styled(Heading)`
  line-height: 1.1;
`;

export const Chevron = styled(ChevronRight)`
  width: 12px;
  fill: ${({ theme }) => theme.colors.primaryLight};
`;

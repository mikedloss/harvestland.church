import styled from 'styled-components';
import { Heading, Box } from 'rebass';

import ChevronDown from '../../../../assets/svg/down-chevron.svg';
import ChevronUp from '../../../../assets/svg/up-chevron.svg';
import { breakpointValues as bp } from '../../../theme';

export const Dropdown = styled(Box)``;

export interface LabelProps {
  isExpanded: boolean;
}
export const Label = styled(Heading).attrs({
  as: 'h3',
  fontSize: [4, 3],
})<LabelProps>`
  text-align: left;
  margin-left: 1rem;
  ${(props) => props.isExpanded && `margin-bottom: 0.5rem;`} cursor: pointer;

  @media screen and (min-width: ${bp.SMALL}px) {
    margin: 1rem;
    margin-left: auto;
    text-align: left;
  }
`;

export const DownChevron = styled(ChevronDown)`
  width: 8px;
  margin-left: 4px;
`;

export const UpChevron = styled(ChevronUp)`
  width: 8px;
  margin-left: 4px;
`;

export interface DropdownContentProps {
  shouldDisplay: boolean;
}
export const DropdownContent = styled(Box)<DropdownContentProps>`
  display: ${({ shouldDisplay }) => (shouldDisplay ? 'block' : 'none')};
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.offWhite};
  min-width: 160px;
  padding: 0.75rem;

  @media screen and (min-width: ${bp.SMALL}px) {
    position: absolute;
  }
`;

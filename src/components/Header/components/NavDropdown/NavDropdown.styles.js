import styled from 'styled-components';
import { Heading, Box } from 'rebass';

import ChevronDown from '../../../../assets/svg/down-chevron.svg';
import { breakpointValues as bp } from '../../../theme';

export const Dropdown = styled(Box)``;

export const Label = styled(Heading)`
  text-align: left;
  margin: 1rem;
  ${(props) =>
    props.isExpanded &&
    `
    margin-bottom: 0.5rem;
  `} cursor: pointer;

  @media screen and (min-width: ${bp.SMALL}px) {
    margin: 1rem;
    margin-left: auto;
    text-align: left;
  }
`;
Label.defaultProps = {
  as: 'h3',
  fontSize: [4, 3],
};

export const Chevron = styled(ChevronDown)`
  width: 8px;
  margin-left: 4px;
`;

export const DropdownContent = styled(Box)`
  display: ${(props) => (props.shouldDisplay ? 'block' : 'none')};
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.offWhite};
  min-width: 160px;
  padding: 0.5rem;

  @media screen and (min-width: ${bp.SMALL}px) {
    position: absolute;
  }
`;

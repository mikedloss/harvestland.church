import styled from 'styled-components';
import { Text } from 'rebass';
import { breakpointValues as bp } from '../../../theme';

export const NavItem = styled(Text)`
  ${'' /* mobile */} margin: 1rem;

  @media screen and (min-width: ${bp.SMALL}px) {
    ${'' /* desktop */} margin-left: auto;
    text-align: center;
  }

  ${(props) =>
    props.isDropdown &&
    `
    @media screen and (min-width: ${bp.SMALL}px) {
      ${'' /* desktop */}
      margin: 1rem 0;
      text-align: left;
    }
  `};
`;

// li content
export const NavContent = styled(Text)`
  text-decoration: none;
`;

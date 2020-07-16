import styled from 'styled-components';
import { Text } from 'rebass';
import { breakpointValues as bp } from '../../../theme';

export const NavItem = styled(Text)`
  margin: 1rem;

  @media screen and (min-width: ${bp.SMALL}px) {
    margin-left: auto;
    text-align: center;
  }

  ${(props) =>
    props.isDropdown &&
    `
    :not(:last-child) {
      margin: 0 0 1rem 1rem;
    }
    :last-child {
      margin: 0 0 0 1rem;
    }

    @media screen and (min-width: ${bp.SMALL}px) {
      margin: 1rem 0;
      text-align: left;

      :not(:last-child) {
        margin: 0 0 1rem 0;
      }
      :last-child {
        margin: 0;
      }
    }
  `};
`;

// li content
export const NavContent = styled(Text)`
  text-decoration: none;
`;

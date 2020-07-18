import React, { useContext } from 'react';

import { IsDropdownContext } from '../NavDropdown';
import * as Styled from './NavItem.styles';

const NavItem: React.FC = ({ children }) => {
  // const { isDropdown } = useContext(IsDropdownContext);

  return (
    <Styled.NavItem as="li" isDropdown={false}>
      <Styled.NavContent>{children || 'Default'}</Styled.NavContent>
    </Styled.NavItem>
  );
};

export default NavItem;

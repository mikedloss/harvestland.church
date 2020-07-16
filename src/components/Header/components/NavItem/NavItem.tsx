import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { IsDropdownContext } from '../NavDropdown';
import * as Styled from './NavItem.styles';

const NavItem = ({ children }) => {
  const isDropdown = useContext(IsDropdownContext);

  return (
    <Styled.NavItem as="li" isDropdown={isDropdown}>
      <Styled.NavContent>{children || 'Default'}</Styled.NavContent>
    </Styled.NavItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
};

export default NavItem;

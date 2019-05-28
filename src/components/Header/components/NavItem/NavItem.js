import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './NavItem.styles';

const NavItem = (props) => {
  return (
    <Styled.NavItem as="li">
      <Styled.NavContent>{props.children || ''}</Styled.NavContent>
    </Styled.NavItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
};

export default NavItem;

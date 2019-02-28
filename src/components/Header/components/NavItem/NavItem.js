import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './NavItem.styles';

const NavItem = (props) => {
  return (
    <Styles.NavItem as="li">
      <Styles.NavContent fontSize={3} fontWeight="bold">
        {props.children || ''}
      </Styles.NavContent>
    </Styles.NavItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
}

export default NavItem;

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useClickAway } from '../../../../hooks/useClickAway';
import * as Styled from './NavDropdown.styles';

export const IsDropdownContext = React.createContext();

export const NavDropdown = ({ label, children }) => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => expanded && setExpanded(false));

  return (
    <IsDropdownContext.Provider value={true}>
      <Styled.Dropdown ref={dropdownRef}>
        <Styled.Label
          onClick={() => setExpanded(!expanded)}
          isExpanded={expanded}
        >
          {label}
          <Styled.Chevron />
        </Styled.Label>
        <Styled.DropdownContent shouldDisplay={expanded}>
          {children}
        </Styled.DropdownContent>
      </Styled.Dropdown>
    </IsDropdownContext.Provider>
  );
};

NavDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

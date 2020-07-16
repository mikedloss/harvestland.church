import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

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
        <Flex flexDirection="row" alignItems="center">
          <Styled.Label
            onClick={() => setExpanded(!expanded)}
            isExpanded={expanded}
          >
            {label}
            {expanded ? (
              <Styled.UpChevron width="0" />
            ) : (
              <Styled.DownChevron width="0" />
            )}
          </Styled.Label>
        </Flex>
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

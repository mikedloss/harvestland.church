import React, { useState, useRef } from 'react';
import { Flex } from 'rebass';

import { useClickAway } from '../../../../hooks/useClickAway';
import * as Styled from './NavDropdown.styles';

interface NavDropdownProps {
  label: string;
}

export const IsDropdownContext = React.createContext({ isDropdown: true });

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => expanded && setExpanded(false));

  return (
    <IsDropdownContext.Provider value={{ isDropdown: true }}>
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

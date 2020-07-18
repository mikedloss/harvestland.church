import React from 'react';
import { Heading, FlexProps } from 'rebass';

import * as Styled from './TextHero.styles';

export interface TextHeroProps extends FlexProps {
  useMargin?: boolean;
}

export const TextHero: React.FC<TextHeroProps> = ({
  useMargin = false,
  children,
}) => {
  return (
    <Styled.TextHeroStyle
      m={useMargin && ['8rem 4rem', '8rem']}
      p={!useMargin && ['8rem 4rem', '8rem']}
    >
      {children ? children : <Heading fontSize={6}>Text Hero</Heading>}
    </Styled.TextHeroStyle>
  );
};

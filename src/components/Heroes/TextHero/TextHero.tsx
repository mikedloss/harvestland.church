import React from 'react';
import { Heading, FlexProps } from 'rebass';

import * as Styled from './TextHero.styles';

export interface TextHeroProps extends FlexProps {
  useMargin?: boolean;
  bg?: string;
  customSpacing?: string | string[];
  customFlex?: FlexProps;
}

export const TextHero: React.FC<TextHeroProps> = ({
  useMargin = false,
  bg = 'white',
  customSpacing,
  customFlex,
  children,
}) => {
  return (
    <Styled.TextHeroStyle
      m={useMargin && (customSpacing || ['8rem 4rem', '8rem'])}
      p={!useMargin && (customSpacing || ['8rem 4rem', '8rem'])}
      bg={bg}
      {...customFlex}
    >
      {children ? children : <Heading fontSize={6}>Text Hero</Heading>}
    </Styled.TextHeroStyle>
  );
};

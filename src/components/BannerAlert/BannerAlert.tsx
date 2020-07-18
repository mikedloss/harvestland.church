import React from 'react';
import { Flex, TextProps } from 'rebass';

import * as Styled from './BannerAlert.styles';

export interface BannerAlertProps {
  type?: 'info' | 'warning';
}

interface BannerAlertComponents {
  Text: React.FC<TextProps>;
  Link: React.FC<any>;
  ExternalLink: React.FC<any>;
}

const Text: React.FC<TextProps> = (props) => <Styled.AlertText {...props} />;
const Link: React.FC<any> = (props) => <Styled.AlertTextLink {...props} />;
const ExternalLink: React.FC<any> = (props) => (
  <Styled.AlertTextLinkExternal {...props} />
);

export const BannerAlert: React.FC<BannerAlertProps> &
  BannerAlertComponents = ({ type = 'info', children }) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      bg={type === 'warning' ? 'warning' : 'primary'}
      p="0.5rem"
    >
      <Flex flexDirection="column" alignItems="center" mr={[null, '2rem']}>
        {children}
      </Flex>
    </Flex>
  );
};

BannerAlert.Text = Text;
BannerAlert.Link = Link;
BannerAlert.ExternalLink = ExternalLink;

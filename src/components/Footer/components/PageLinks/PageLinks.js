import React from 'react';
import { Link } from 'gatsby';

import * as Styles from './PageLinks.styles';

export const PageLinks = () => (
  <Styles.PageLinkStyle>
    <Styles.LinkText as={Link} to="about">
      about
    </Styles.LinkText>{' '}
    /{' '}
    <Styles.LinkText as={Link} to="connect">
      connect
    </Styles.LinkText>{' '}
    /{' '}
    <Styles.LinkText as={Link} to="sermons">
      sermons
    </Styles.LinkText>{' '}
    /{' '}
    <Styles.LinkText as={Link} to="events">
      events
    </Styles.LinkText>{' '}
    /{' '}
    <Styles.LinkText as={Link} to="give">
      give
    </Styles.LinkText>{' '}
    /{' '}
  </Styles.PageLinkStyle>
);

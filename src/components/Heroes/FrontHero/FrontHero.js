import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Heading } from 'rebass';

import * as Styles from './FrontHero.styles';

const FrontHero = (props) => {
  console.log(props);
  return (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: { eq: "images/tall.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(data);
        return (
          <Styles.HeroStyle
            alignItems="center"
            justifyContent="center"
            height="60vh"
            img={data}
          >
            <Heading textAlign="center" color="white" fontSize={[4, 5, 5]}>
              hello
            </Heading>
          </Styles.HeroStyle>
        );
      }}
    />
  );
};

export default FrontHero;

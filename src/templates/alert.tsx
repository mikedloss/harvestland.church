import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex } from 'rebass';

import { Layout, Container, Hero } from '../components';

export interface AlertTemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        path: string;
        title: string;
      };
    };
  };
}

const AlertTemplate: React.FC<AlertTemplateProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout fullWidth>
      <Container>
        <Hero.Text>
          <Heading fontSize={6} color="black" mb={4}>
            {frontmatter.title}
          </Heading>
          <Heading fontSize={2} color="black">
            {frontmatter.date}
          </Heading>
        </Hero.Text>
        <Flex m={4}>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Flex>
      </Container>
    </Layout>
  );
};

export default AlertTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

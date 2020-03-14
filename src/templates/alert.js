import React from "react";
import { graphql } from "gatsby";
import { Heading, Text, Flex } from "rebass";

import { Layout, Container, Hero } from "../components";

import * as Styled from "../template-styles/alert.styles";

export default function Template({ data }) {
  console.log("data :", data);
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
}

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

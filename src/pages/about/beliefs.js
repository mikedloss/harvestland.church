import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Box, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

const BeliefsPage = (props) => {
  const { heroImage } = props.data;
  return (
    <Layout>
      <SEO title="Beliefs" keywords={['harvestland beliefs', 'beliefs']} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
        <Heading p="1rem" fontSize={[5, 6]}>
          What We Believe
        </Heading>
      </ImageHero>
      <Container width={["100%", "80%"]} mx="auto">
        <Flex flexDirection="column">
          <Heading fontSize={5}>Our Beliefs</Heading>
          <Box my="1rem">
            <Heading fontSize={3}>God</Heading>
            <Text>
              We believe there is one God. In the unity of the Godhead, there are
              three persons, Father, Son, and Holy Spirit, equal in every divine
              perfection and attribute, fulfilling distinct but complementary
              roles in the great work of redemption.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>The Bible</Heading>
            <Text>
              We believe the Bible is the inspired Word of God and the only
              infallible guide and rule of our faith and practice.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Salvation</Heading>
            <Text>
              We believe the human race is fallen from its original, created
              goodness because of the sin of Adam and Eve in the Garden of Eden.
              Because of our total inability to save ourselves, salvation is by
              God’s grace alone. It is received by faith with repentance and
              acceptance of Jesus Christ as personal Savior.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Spirit-filled Life</Heading>
            <Text>
              We believe every Christian should walk and abide in daily fellowship
              with the Holy Spirit and experience continual renewing of God’s
              power to live a Spirit-filled life in attitudes, thoughts, speech,
              and conduct.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>The Church</Heading>
            <Text>
              We believe Christians should assemble regularly for edification,
              worship, fellowship, and proclamation of the gospel. All believers
              should do the work of the ministry according to their spiritual
              gifts.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Evangelism and Missions</Heading>
            <Text>
              We believe the Great Commission of our Lord Jesus Christ commands us
              to carry the gospel message to the entire world – to every nation,
              ethnicity, culture, and language. The growth and strength of the
              Church depend on its wholehearted sacrifice and support for world
              evangelization.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Eternity</Heading>
            <Text>
              We believe the resurrection of our Lord Jesus Christ assures the
              believer of bodily resurrection and eternal life, and that the
              second coming of Christ will be personal, visible, and triumphant.
            </Text>
          </Box>
          <hr style={{ width: "100%" }} />
          <Heading fontSize={5}>Our Values</Heading>
          <Box my="1rem">
            <Heading fontSize={3}>Life Up Christ</Heading>
            <Text>
              We are passionate about worshipping Jesus through prayer, worship &
              learning His Word. We will give our time, spiritual gifts, abilities
              and finances to extend Christ’s Kingdom.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Lead People into Commitment</Heading>
            <Text>
              We are on a journey of faith together. We depend on the transforming
              power of God in our lives. We desire to disciple and raise up
              leaders who are followers of Jesus and obey His teachings.
            </Text>
          </Box>
          <Box my="1rem">
            <Heading fontSize={3}>Live in Community</Heading>
            <Text>
              We grow in relationship with God by being in relationship with God’s
              people. We invest in the lives of others by building Christ centered
              relationships, and creating a culture of teamwork where we rally
              together for common goals.
            </Text>
          </Box>
          <Box mt="1rem">
            <Heading fontSize={3}>Love Through Compassion</Heading>
            <Text>
              We serve the least, the last, and the lost. We embrace an
              environment of love, grace and forgiveness.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/about-header.jpg" }) {
      ...FullWidthImage
    }
  }
`;

export default BeliefsPage;

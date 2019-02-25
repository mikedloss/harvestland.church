import styled from 'styled-components';
import { Flex } from 'rebass';

export const HeroStyle = styled(Flex)`
  flex-direction: column;
  height: ${props => (props.height ? `${props.height}` : '20vh')};
  width: 100%;
  background-image: url('${props => props.img.file.childImageSharp.fluid.src}');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const HeroBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;
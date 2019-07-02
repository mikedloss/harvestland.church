import styled from 'styled-components';
import { Box } from 'rebass';

const Container = styled(Box)`
  max-width: 1600px;
  margin: 0 auto;
`;
Container.defaultProps = {
  padding: 4,
};

export default Container;

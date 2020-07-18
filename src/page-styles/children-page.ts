import styled from 'styled-components';
import { Image } from 'rebass';

export const KidsLogo = styled(Image)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 100%;
  width: 400px;
`;

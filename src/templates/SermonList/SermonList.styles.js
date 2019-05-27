import styled from 'styled-components';
import { Link as RebassLink } from 'rebass';

export const ImageContainer = styled.div`
  width: 200px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export const Link = styled(RebassLink)`
  display: inline-block;

  &:after {
    content: '';
    width: 0px;
    height: 4px;
    display: block;
    background: ${({ theme }) => theme.colors.primary};
    transition: 300ms;
  }

  &:hover:after {
    width: 100%;
  }
`;
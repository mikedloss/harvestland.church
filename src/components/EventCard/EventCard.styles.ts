import styled from 'styled-components';
import { Heading, Text, Flex, Box, Image } from 'rebass';

export const EventContainer = styled(Flex).attrs({
  flexDirection: ['column', 'row'],
  mb: '1rem',
})``;

export const EventImageContainer = styled(Box).attrs({
  width: ['100%', '50%'],
})``;

export const EventImage = styled(Image)``;

export const EventInfoContainer = styled(Flex).attrs({
  flexDirection: 'column',
  alignItems: ['center', 'flex-start'],
  justifyContent: 'center',
  p: '1rem',
  width: ['100%', '50%'],
})``;

export const EventTitle = styled(Heading).attrs({
  fontSize: 5,
})`
  text-align: center;
`;

export const EventDateText = styled(Text).attrs({
  fontSize: 1,
})``;

export const EventSummary = styled(Text).attrs({
  my: '0.5rem',
})``;

export const EventInProgress = styled(Text).attrs({
  fontSize: 1,
})`
  font-style: italic;
`;

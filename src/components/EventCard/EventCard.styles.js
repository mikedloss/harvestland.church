import styled from 'styled-components';
import { Heading, Text, Flex, Box, Image } from 'rebass';

// export const EventCardStyle = styled(Card)``;
export const EventContainer = styled(Flex)``;
EventContainer.defaultProps = {
  flexDirection: ['column', 'row'],
  mb: '1rem',
};

export const EventImageContainer = styled(Box)``;
EventImageContainer.defaultProps = {
  width: ['100%', '50%'],
};

export const EventImage = styled(Image)``;

export const EventInfoContainer = styled(Flex)``;
EventInfoContainer.defaultProps = {
  flexDirection: 'column',
  alignItems: ['center', 'flex-start'],
  justifyContent: 'center',
  p: '1rem',
  width: ['100%', '50%'],
};

export const EventTitle = styled(Heading)`
  text-align: center;
`;
EventTitle.defaultProps = {
  fontSize: 5,
};

export const EventDateText = styled(Text)``;
EventDateText.defaultProps = {
  fontSize: 1,
};

export const EventSummary = styled(Text)``;
EventSummary.defaultProps = {
  my: '0.5rem',
};

export const EventInProgress = styled(Text)`
  font-style: italic;
`;
EventInProgress.defaultProps = {
  fontSize: 1,
}
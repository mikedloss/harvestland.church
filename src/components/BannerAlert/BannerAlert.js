import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";
import { graphql } from "gatsby";

import * as Styled from "./BannerAlert.styles";

export const BannerAlert = ({ alertType, alertTitle, alertLink }) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      bg={alertType === "warning" ? "warning" : "primary"}
      p="0.5rem"
    >
      <Flex flexDirection="column" alignItems="center" mr={[null, "2rem"]}>
        <Styled.AlertTextLink to={alertLink}>
          <Styled.AlertText color="white">{alertTitle}</Styled.AlertText>
        </Styled.AlertTextLink>
      </Flex>
    </Flex>
  );
};

export const BannerAlertPropTypes = {
  alertType: PropTypes.oneOf(["info", "warning"]),
  alertTitle: PropTypes.string.isRequired,
  alertLink: PropTypes.string.isRequired
};

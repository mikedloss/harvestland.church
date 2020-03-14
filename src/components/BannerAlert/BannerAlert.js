import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";

import * as Styled from "./BannerAlert.styles";

export const BannerAlert = ({ type, children }) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      bg={type === "warning" ? "warning" : "primary"}
      p="0.5rem"
    >
      <Flex flexDirection="column" alignItems="center" mr={[null, "2rem"]}>
        {children}
      </Flex>
    </Flex>
  );
};

BannerAlert.Text = Styled.AlertText;
BannerAlert.Link = Styled.AlertTextLink;

export const BannerAlertPropTypes = {
  type: PropTypes.oneOf(["info", "warning"])
};

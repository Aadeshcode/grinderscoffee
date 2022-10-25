
import { Box } from "@chakra-ui/react";
import React from "react";

const Button = (props) => {
  const { children, format, active, ...rest } = props;
  return (
    <Box
      className={active ? "btnActive" : "lol"}
      title={format}
      {...rest}
      style={{ width: "1.5em", height: "1.5em" }}
    >
      {children}
    </Box>
  );
};

export default Button;

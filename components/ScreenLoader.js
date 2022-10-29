import { Spinner } from "@chakra-ui/react";
import React from "react";

const ScreenLoader = () => {
  return (
    <>
      <div className="spinner">
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="#6c6d6e"
          color="white"
          size="xl"
        />
      </div>
    </>
  );
};

export default ScreenLoader;

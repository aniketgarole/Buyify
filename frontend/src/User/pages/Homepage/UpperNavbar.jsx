import { Box } from "@chakra-ui/react";
import React from "react";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";

export const UpperNavbar = () => {
  return (
    <Box>
      <MiddleNavbar />
      <BottomNavbar />
    </Box>
  );
};

import { Box } from "@chakra-ui/react";
import React from "react";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";
import DummyNav from "../Products/DummyNav";


export const UpperNavbar = () => {
  return (
    <Box>
      <MiddleNavbar />
      <DummyNav/>
      
    </Box>
  );
};

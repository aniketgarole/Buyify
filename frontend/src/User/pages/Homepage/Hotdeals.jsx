import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Hotdeals = () => {
  return (
    <Link>
      <Box marginY={"40px"} marginX={"20px"} bg={"white"}>
        <Box alignItem="center" padding={"30px 75px"}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Apr_23/MayART/GW_editorial_1150x323._CB590911576_.jpg" />
        </Box>
      </Box>
    </Link>
  );
};

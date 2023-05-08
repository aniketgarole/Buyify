import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Bestbuy = () => {
  return (
    <>
      <Link>
        <Box padding={"10px 180px"}>
          <Image
            border={"1px solid silver"}
            width={"auto"}
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/da63a8ba-7f7c-4eda-91a5-ca42ec7d5036.gif"
          />
        </Box>
      </Link>
    </>
  );
};

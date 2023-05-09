import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Trendingdeals = () => {
  return (
    <>
      <Link>
        <Box
          paddingX={{ base: "40px", sm: "80px", md: "180px" }}
          paddingY={"10px"}
        >
          <Image
            width={"auto"}
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5a134acc-3112-4df4-b231-7b4a37772544.gif"
          />
        </Box>
      </Link>
    </>
  );
};

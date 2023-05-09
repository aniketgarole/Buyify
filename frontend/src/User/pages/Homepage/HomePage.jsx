import React from "react";
import { Box } from "@chakra-ui/react";

import { UpperNavbar } from "./UpperNavbar";
import Carousel from "./Carousel";
import Bodyfour from "./Bodyfour";
import Bodyfive from "./Bodyfive";
import Bodysix from "./Bodysix";
import Bodyseven from "./Bodyseven";
import Bodyeight from "./Bodyeight";
import Footer from "./Footer";
import { Hotdeals } from "./Hotdeals";
import { Trendingdeals } from "./Trendingdeals";
import { Bestbuy } from "./Bestbuy";
import { Exploremore } from "./Exploremore";

export const HomePage = () => {
  return (

    <>
      <Box bg={"rgb(227,230,230)"}>
        <UpperNavbar />
        <Carousel />
        <Bodyfour />
        <Bodyfive />
        <Hotdeals />
        <Exploremore />
        <Bodysix />
        <Bestbuy />
        <Bodyseven />
        <Trendingdeals />
        <Bodyeight />
      </Box>
      <Footer />
    </>

//     <Box bg={"rgb(227,230,230)"}>
//       <UpperNavbar />
//       <Carousel />
//       <Bodyfour />
//       <Bodyfive />
//       <Hotdeals />
//       <Exploremore />
//       <Bodysix />
//       <Bestbuy />
//       <Bodyseven />
//       <Trendingdeals />
//       <Bodyeight />
//       <Footer />
//     </Box>

  );
};

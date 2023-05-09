import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        "https://i.pinimg.com/originals/76/3b/d7/763bd70325329ca7c38a99f661734c7f.jpg",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0277/5420/1187/files/Fellmonger-banner-op.jpg?v=1648115649",
    },
    {
      image:
        "https://cdnb.artstation.com/p/media_assets/images/images/001/044/781/large/Dioblog_Banner_iPhone14Pro.jpg?1678854645",
    },
    {
      image:
        "https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-27-MBIlgV7PA.jpg",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/falcon-1-desktop-banner.jpg?v=1674214771",
    },
  ];

  return (
    <Box fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}>
      <Box position={"relative"} height={"100%"} overflow={"hidden"}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickPrev()}
        >
          <ArrowBackIosNewIcon size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickNext()}
        >
          <ArrowForwardIosIcon size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"lg"}
              width={"50%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

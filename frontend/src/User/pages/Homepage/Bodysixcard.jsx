import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Bodyfourchildcard from "./Bodyfourchildcard";

const Details = [
  {
    src: "https://m.media-amazon.com/images/I/91IP1v7zI8L.jpg",
    OFF: "",
    Product: "Lakme Absolute Soft Brush",
    Price: "₹ 799",
    SPrice: "",
  },

  {
    src: "https://skincarebd.com/wp-content/uploads/2021/02/48102836ecca7f74a82cda2ec4736515.jpg",
    OFF: "",
    Product: "Black Sugar Facewash",
    Price: "₹ 499",
    SPrice: "",
  },

  {
    src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2ec92551-51ca-45d4-a437-179dc9fce64d.__CR0,0,362,453_PT0_SX362_V1___.jpg",
    OFF: "",
    Product: "Maange Soft Dense Brush",
    Price: "₹ 550",
    SPrice: "",
  },

  {
    src: "https://img.freepik.com/premium-vector/lipstick-beauty-cosmetics-background-use-advertising-flyer-banner-leaflet-vector_260787-311.jpg?w=360",
    OFF: "",
    Product: "Maybelline Lipstick",
    Price: "₹ 999",
    SPrice: "",
  },
];

const Bodysixcard = () => {
  return (
    <Flex gap={3}>
      <Link>
        <Image
          height={"auto"}
          width={450}
          src="https://i.pinimg.com/originals/1a/76/74/1a7674d20780b97d712ef9d1010236ff.jpg"
        />
      </Link>
      <Flex gap={3}>
        {Details.map((el) => (
          <Bodyfourchildcard key={el.Product} {...el} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Bodysixcard;

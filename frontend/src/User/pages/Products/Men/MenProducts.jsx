import { Box, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../../../components/Product/ProductCard'

let data= [
  {
      "categories": "Tshirts",
      "ratings": 4,
      "rating_count": "16.8k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
      "brand": "Huetrap",
      "title": "Typography Print T-shirt",
      "size": "M",
      "price": 296,
      "strike_price": "Rs. 1099",
      "discount": "(73% OFF)",
      "id": 1
  },
  {
      "categories": "Tshirts",
      "ratings": 4.1,
      "rating_count": "4.4k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg",
      "brand": "Difference of Opinion",
      "title": "Men Solid Oversized Cotton",
      "size": "S",
      "price": 532,
      "strike_price": "Rs. 1299",
      "discount": "(59% OFF)",
      "id": 2
  },
  {
      "categories": "Tshirts",
      "ratings": 4.2,
      "rating_count": "2.9k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/8923841/2019/6/3/736b9f2c-3a49-41a9-828c-1e0218b62e431559550212164-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-1.jpg",
      "brand": "Minions by Kook N Keech",
      "title": "Printed Round Neck Pure Cotton T-shirt",
      "size": "S",
      "price": 494,
      "strike_price": "Rs. 1099",
      "discount": "(55% OFF)",
      "id": 3
  },
  {
      "categories": "Tshirts",
      "ratings": 4.2,
      "rating_count": "33.7k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg",
      "brand": "Roadster",
      "title": "Pure Cotton T-shirt",
      "size": "M",
      "price": 349,
      "strike_price": "Rs. 499",
      "discount": "(30% OFF)",
      "id": 4
  },
  {
      "categories": "Tshirts",
      "ratings": 4.2,
      "rating_count": "53.5k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Printed Pure Cotton T-shirt",
      "size": "M",
      "price": 314,
      "strike_price": "Rs. 699",
      "discount": "(55% OFF)",
      "id": 5
  },
  {
      "categories": "Tshirts",
      "ratings": 3,
      "rating_count": "",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/21934040/2023/2/10/953d7247-ef91-486e-b3a8-9b624f7116351676042836974ArrowSportsMenBlueStripedPiquePoloShirt1.jpg",
      "brand": "Arrow Sport",
      "title": "Striped Polo Collar T-shirt",
      "size": "S",
      "price": 989,
      "strike_price": "Rs. 1799",
      "discount": "(45% OFF)",
      "id": 6
  },
  {
      "categories": "Tshirts",
      "ratings": 4.6,
      "rating_count": "1.6k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/14047672/2021/5/17/c1fd89a5-6364-4d0b-bde4-fcc0b7ddd1571621252467672-Louis-Philippe-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-71816-1.jpg",
      "brand": "Louis Philippe",
      "title": "Polo Collar T-shirt",
      "size": "S",
      "price": 1044,
      "strike_price": "Rs. 1899",
      "discount": "(45% OFF)",
      "id": 7
  },
  {
      "categories": "Tshirts",
      "ratings": 4.6,
      "rating_count": 94,
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/20516498/2023/1/18/b58bd6a8-bccc-4882-b61e-62bfec8c1dd61674024843488-Polo-T-Shirt-9581674024842996-1.jpg",
      "brand": "Levis",
      "title": "Men Pure Cotton  T-shirt",
      "size": "S",
      "price": 989,
      "strike_price": "Rs. 1799",
      "discount": "(45% OFF)",
      "id": 8
  },
  {
      "categories": "Tshirts",
      "ratings": 4.2,
      "rating_count": "23.1k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg",
      "brand": "Roadster",
      "title": "Men Cotton Pure Cotton T-shirt",
      "size": "L",
      "price": 374,
      "strike_price": "Rs. 499",
      "discount": "(25% OFF)",
      "id": 9
  },
  {
      "categories": "Tshirts",
      "ratings": 4,
      "rating_count": 32,
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/22283810/2023/3/10/f00dafdf-e1d6-43a7-a844-3c20e842352316784540895343-packRegularFitRound-neckT-shirts1.jpg",
      "brand": "H&M",
      "title": "Men 3-Pack Cotton T-shirts",
      "size": "XL",
      "price": 679,
      "strike_price": "",
      "discount": "",
      "id": 10
  },
  {
      "categories": "Tshirts",
      "ratings": 4.5,
      "rating_count": "1.5k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/14047664/2021/5/17/a793738f-a7c7-4b3a-a845-e4218e250f831621252555081-Louis-Philippe-Men-Tshirts-4101621252554363-1.jpg",
      "brand": "Louis Philippe",
      "title": "Polo Collar T-shirt",
      "size": "S",
      "price": 1139,
      "strike_price": "Rs. 1899",
      "discount": "(40% OFF)",
      "id": 11
  },
  {
      "categories": "Tshirts",
      "ratings": 2,
      "rating_count": "",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/21934024/2023/2/10/8799335c-286c-44d0-9b01-528471e6ae761676042794417ArrowSportMenRedStripedPoloCollarT-shirt1.jpg",
      "brand": "Arrow Sport",
      "title": "Striped Pure Cotton T-shirt",
      "size": "S",
      "price": 989,
      "strike_price": "Rs. 1799",
      "discount": "(45% OFF)",
      "id": 12
  },
  {
      "categories": "Tshirts",
      "ratings": 4.1,
      "rating_count": "9.5k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg",
      "brand": "HERE&NOW",
      "title": "Polo Collar Cotton Pure Cotton T-shirt",
      "size": "XL",
      "price": 519,
      "strike_price": "Rs. 1299",
      "discount": "(60% OFF)",
      "id": 13
  },
  {
      "categories": "Tshirts",
      "ratings": 4.2,
      "rating_count": "65.2k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/1700944/2019/6/8/488007ef-c65e-4a2f-a92b-65b6846894861559989274078-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
      "brand": "HRX by Hrithik Roshan",
      "title": "Printed Cotton Pure Cotton T-shirt",
      "size": "M",
      "price": 594,
      "strike_price": "Rs. 699",
      "discount": "(15% OFF)",
      "id": 14
  },
  {
      "categories": "Tshirts",
      "ratings": 3.9,
      "rating_count": "10.8k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/1824340/2017/8/3/11501764560457-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3291501764560241-1.jpg",
      "brand": "Roadster",
      "title": "Longline T-shirt with Raw Edge",
      "size": "S",
      "price": 359,
      "strike_price": "Rs. 799",
      "discount": "(55% OFF)",
      "id": 15
  },
  {
      "categories": "Tshirts",
      "ratings": 4.1,
      "rating_count": 540,
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/20355854/2022/10/21/a4193b5b-ff1e-4461-adb4-dcf05bf7b5e61666345317570-DILLINGER-Men-Tshirts-6131666345317060-1.jpg",
      "brand": "DILLINGER",
      "title": "Men Oversized T-shirt",
      "size": "S",
      "price": 495,
      "strike_price": "Rs. 799",
      "discount": "(38% OFF)",
      "id": 16
  },
  {
      "categories": "Tshirts",
      "ratings": 4.1,
      "rating_count": "11.3k",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
      "brand": "Urbano Fashion",
      "title": "Slim Tropical Printed Pure Cotton T-shirt",
      "size": "S",
      "price": 461,
      "strike_price": "Rs. 1099",
      "discount": "(58% OFF)",
      "id": 17
  },
  {
      "categories": "Tshirts",
      "ratings": 5,
      "rating_count": "",
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/21805892/2023/2/2/12e65b5c-52a6-46e6-90b9-1f6caaee1eaf1675322525583TechnosportMenMangoTshirt1.jpg",
      "brand": "Technosport",
      "title": "Antimicrobial T-shirt",
      "size": "S",
      "price": 679,
      "strike_price": "",
      "discount": "",
      "id": 18
  },
  {
      "categories": "Tshirts",
      "ratings": 4.3,
      "rating_count": 73,
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/20516642/2023/1/17/f1b0aba6-3224-47f0-8ea7-e567e76451171673956832090-T-Shirt-8681673956831665-1.jpg",
      "brand": "Levis",
      "title": "Men Pure Cotton T-shirt",
      "size": "S",
      "price": 659,
      "strike_price": "Rs. 1199",
      "discount": "(45% OFF)",
      "id": 19
  },
  {
      "categories": "Tshirts",
      "ratings": 4.4,
      "rating_count": 370,
      "image": "https://assets.myntassets.com/dpr_2,q_1200,w_6100,c_limit,fl_progressive/assets/images/14162870/2022/11/6/2558723f-28ce-447b-bcd0-3fa3d1a4c7bd1667718031101PumaMenBlackSolidRoundNeckCottonT-shirt1.jpg",
      "brand": "Puma",
      "title": "Men Round Neck Cotton T-shirt",
      "size": "L",
      "price": 569,
      "strike_price": "Rs. 999",
      "discount": "(43% OFF)",
      "id": 20
  }
]
function MenProducts() {
  return (
    <>
    <Box width="100%" border="1px solid red"  >
    <Grid templateColumns={{sm:'repeat(2, 1fr)',base:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={{base:1,sm:2,md:5,lg:5}}>
    {data.map((item,i)=>{
      return ( 
       
       
        <ProductCard  key={item.id} data={item}/>
      
        
       
      )
    })}
    </Grid>
    </Box>
    
    </>
  )
}

export default MenProducts
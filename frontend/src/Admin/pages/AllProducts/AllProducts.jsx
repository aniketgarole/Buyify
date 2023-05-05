import React, { useEffect, useState } from 'react'
import "./allproducts.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Singleproduct from '../../components/Singleproduct/Singleproduct'
import axios from 'axios'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Err, setErr] = useState(false)

  const prod = [
    {
      "id": "M1",
      "category": "Mens",
      "subCategory": "Joggers",
      "brand": "U.S. Polo Assn",
      "title": "Men Rapid Dry Running Joggers",
      "offerPrice": 664,
      "originalPrice": 1899,
      "discount": "65%",
      "quantity": 34,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
      ],
      "size": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "rating": 3.7,
      "ratingCount": "13.8k"
  },
  {
      "id": "M2",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "U.S. Polo Assn",
      "title": "Printed Casual Shirt",
      "offerPrice": 599,
      "originalPrice": 1499,
      "discount": "60%",
      "quantity": 25,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"
      ],
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "3XL",
          "XXXL"
      ],
      "rating": 4.1,
      "ratingCount": "25.9k"
  },
  {
      "id": "M3",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "U.S. Polo Assn",
      "title": "Men Slim Fit Casual Shirt",
      "offerPrice": 626,
      "originalPrice": 1649,
      "discount": "62%",
      "quantity": 30,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg"
      ],
      "size": [
          "39",
          "40",
          "42",
          "44",
          "46"
      ],
      "rating": 4.1,
      "ratingCount": "8.2k"
  },
  {
      "id": "M4",
      "category": "Mens",
      "subCategory": "Chino",
      "brand": "Roadster",
      "title": "Men Time Travlr Slim Fit Chinos",
      "offerPrice": 859,
      "originalPrice": 1999,
      "discount": "57%",
      "quantity": 40,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 4.2,
      "ratingCount": "5.8k"
  },
  {
      "id": "M5",
      "category": "Mens",
      "subCategory": "Chino",
      "brand": "U.S. Polo Assn",
      "title": "Men Tapered Fit Chinos",
      "offerPrice": 743,
      "originalPrice": 1549,
      "discount": "52%",
      "quantity": 24,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg"
      ],
      "size": [
          "30",
          "32",
          "34",
          "36"
      ],
      "rating": 4.1,
      "ratingCount": "12.7k"
  },
  {
      "id": "M6",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Roadster",
      "title": "Men Slim Fit Jeans",
      "offerPrice": 719,
      "originalPrice": 1499,
      "discount": "52%",
      "quantity": 32,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 3.8,
      "ratingCount": "6.6k"
  },
  {
      "id": "M7",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Jeans",
      "offerPrice": 558,
      "originalPrice": 1299,
      "discount": "57%",
      "quantity": 40,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg"
      ],
      "size": [
          "30",
          "32",
          "34",
          "36",
          "38"
      ],
      "rating": 3.8,
      "ratingCount": "9k"
  },
  {
      "id": "M8",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "LOCOMOTIVE",
      "title": "Men Slim Fit Casual Shirt",
      "offerPrice": 577,
      "originalPrice": 1649,
      "discount": "65%",
      "quantity": 37,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg"
      ],
      "size": [
          "39",
          "40",
          "42",
          "44"
      ],
      "rating": 4.1,
      "ratingCount": "5.7k"
  },
  {
      "id": "M9",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "U.S. Polo Assn",
      "title": "Men Slim Fit Casual Shirt",
      "offerPrice": 628,
      "originalPrice": 1849,
      "discount": "66%",
      "quantity": 44,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"
      ],
      "size": [
          "38",
          "40",
          "42",
          "44",
          "46"
      ],
      "rating": 4.1,
      "ratingCount": "13.1k"
  },
  {
      "id": "M10",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "Roadster",
      "title": "Men Pure Cotton Casual Shirt",
      "offerPrice": 494,
      "originalPrice": 1499,
      "discount": "67%",
      "quantity": 14,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg"
      ],
      "size": [
          "38",
          "40",
          "42",
          "44",
          "46",
          "48"
      ],
      "rating": 4.3,
      "ratingCount": "34.3k"
  },
  {
      "id": "M11",
      "category": "Mens",
      "subCategory": "Joggers",
      "brand": "United Colors of Benetton",
      "title": "Men Printed  Joggers",
      "offerPrice": 824,
      "originalPrice": 1649,
      "discount": "50%",
      "quantity": 38,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg"
      ],
      "size": [
          "S",
          "M",
          "L",
          "XL"
      ],
      "rating": 4.7,
      "ratingCount": "55"
  },
  {
      "id": "M12",
      "category": "Mens",
      "subCategory": "Trousers",
      "brand": "U.S. Polo Assn",
      "title": "Men Slim Fit Cargos Trousers",
      "offerPrice": 1055,
      "originalPrice": 2399,
      "discount": "56%",
      "quantity": 42,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36"
      ],
      "rating": 3.9,
      "ratingCount": "700"
  },
  {
      "id": "M13",
      "category": "Mens",
      "subCategory": "Jeans",
       "brand": "Jack & Jones",
      "title": "Men Blue Regular Jeans",
      "offerPrice": 0,
      "originalPrice": 1499,
      "discount": null,
      "quantity": 31,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15193854/2021/8/19/c31b2cd1-fdba-4cd2-8ab9-3cc1186498c21629350915270RegularJeans1.jpg"
      ],
      "size": [
          "28, ",
          "29, ",
          "30, ",
          "31, ",
          "32, ",
          "33, ",
          "34, ",
          "36, ",
          "38, ",
          "40"
      ],
      "rating": 4.3,
      "ratingCount": "563"
  },
  {
      "id": "M14",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Jack & Jones",
      "title": "Men Slim Tapered Crop Jeans",
      "offerPrice": 839,
      "originalPrice": 2099,
      "discount": "60%",
      "quantity": 17,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36"
      ],
      "rating": 3,
      "ratingCount": "1.3k"
  },
  {
      "id": "M15",
      "category": "Mens",
      "subCategory": "Tshirt",
      "brand": "Jack & Jones",
      "title": "Solid Round Neck Pure Cotton T-shirt",
      "offerPrice": 189,
      "originalPrice": 499,
      "discount": "62%",
      "quantity": 26,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg"
      ],
      "size": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "3XL",
          "4XL"
      ],
      "rating": 4.2,
      "ratingCount": "7.2k"
  },
  {
      "id": "M16",
      "category": "Mens",
      "subCategory": "SweatShirt",
       "brand": "Jack & Jones",
      "title": "Men Relaxed Fit Sweatshirt",
      "offerPrice": 0,
      "originalPrice": 799,
      "discount": null,
      "quantity": 41,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14927328/2021/7/26/8fb6fbe5-3c11-4362-9c03-39c7347ac22e1627273135845RelaxedFitSweatshirt1.jpg"
      ],
      "size": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "rating": 4.2,
      "ratingCount": "3k"
  },
  {
      "id": "M17",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Roadster",
      "title": "Men Super Skinny Fit Jeans",
      "offerPrice": 594,
      "originalPrice": 1699,
      "discount": "65%",
      "quantity": 26,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 3.6,
      "ratingCount": "6.7k"
  },
  {
      "id": "M18",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Lee",
      "title": "Men Skinny Fit Jeans",
      "offerPrice": 0,
      "originalPrice": 1999,
      "discount": null,
      "quantity": 33,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19597502/2022/8/22/1ddc25a7-9076-438f-b294-226be72fbc341661157159538LeeMenBruceLightBlueSkinnyJeans1.jpg"
      ],
      "size": [
          "30",
          "32",
          "34",
          "36",
          "38"
      ],
      "rating": 4.1,
      "ratingCount": "10"
  },
  {
      "id": "M19",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "HIGHLANDER",
      "title": "Men Slim Fit Casual Shirt",
      "offerPrice": 516,
      "originalPrice": 1099,
      "discount": "53%",
      "quantity": 35,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg"
      ],
      "size": [
          "39",
          "40",
          "42",
          "44"
      ],
      "rating": 4.2,
      "ratingCount": "6.3k"
  },
  {
      "id": "M20",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "Jack & Jones",
      "title": "Men Slim Fit Casual Shirt",
      "offerPrice": 628,
      "originalPrice": 1849,
      "discount": "66%",
      "quantity": 39,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg"
      ],
      "size": [
          "38",
          "40",
          "42",
          "44",
          "46"
      ],
      "rating": 4.2,
      "ratingCount": "8.1k"
  },
  {
      "id": "M21",
      "category": "Mens",
      "subCategory": "Trouser",
      "brand": "DENNISON",
      "title": "Men Tapered Fit Trousers",
      "offerPrice": 883,
      "originalPrice": 2599,
      "discount": "66%",
      "quantity": 24,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 3.7,
      "ratingCount": "2.8k"
  },
  {
      "id": "M22",
      "category": "Mens",
      "subCategory": "SweatShirt",
      "brand": "Roadster",
      "title": "Solid Hooded Sweatshirt",
      "offerPrice": 569,
      "originalPrice": 1499,
      "discount": "62%",
      "quantity": 18,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg"
      ],
      "size": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "rating": 4.4,
      "ratingCount": "1.2k"
  },
  {
      "id": "M23",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "Roadster",
      "title": "Men Casual Shirt",
      "offerPrice": 730,
      "originalPrice": 1699,
      "discount": "57%",
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg"
      ],
      "size": [
          "38",
          "40",
          "42",
          "44",
          "46",
          "48"
      ],
      "rating": 4.2,
      "ratingCount": "2.4k"
  },
  {
      "id": "M24",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "HIGHLANDER",
      "title": "Men Tapered Fit Jeans",
      "offerPrice": 623,
      "originalPrice": 1299,
      "discount": "52%",
      "quantity": 36,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg"
      ],
      "size": [
          "30",
          "32",
          "34",
          "36",
          "38"
      ],
      "rating": 3.9,
      "ratingCount": "11k"
  },
  {
      "id": "M25",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Roadster",
      "title": "Men Skinny Fit Jeans",
      "offerPrice": 659,
      "originalPrice": 1999,
      "discount": "67%",
      "quantity": 54,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 3.8,
      "ratingCount": "2.6k"
  },
  {
      "id": "M26",
      "category": "Mens",
      "subCategory": "Shirt",
      "brand": "Jack & Jones",
      "title": "Men Cotton Casual Shirt",
      "offerPrice": 739,
      "originalPrice": 1999,
      "discount": " 63 %",
      "quantity": 55,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg"
      ],
      "size": [
          "38",
          "40",
          "42",
          "44",
          "46"
      ],
      "rating": 4.4,
      "ratingCount": "5.6k"
  },
  {
      "id": "M27",
      "category": "Mens",
      "subCategory": "Trouser",
      "brand": "Roadster",
      "title": "Men Cotton Cargo Trousers",
      "offerPrice": 791,
      "originalPrice": 2399,
      "discount": "67%",
      "quantity": 32,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38",
          "40"
      ],
      "rating": 3.8,
      "ratingCount": "5.1k"
  },
  {
      "id": "M28",
      "category": "Mens",
      "subCategory": "Jeans",
      "brand": "Levis",
      "title": "Men 512 Slim Tapered Fit Jeans",
      "offerPrice": 2239,
      "originalPrice": 3199,
      "discount": "30%",
      "quantity": 34,
      "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg"
      ],
      "size": [
          "28",
          "30",
          "32",
          "34",
          "36",
          "38"
      ],
      "rating": 4.3,
      "ratingCount": "80"
  },
  ]


  const getProducts = async() => {
    try {
      setLoading(true)
      let res = await axios.get(`http://localhost:8000/userProduct`)
      // console.log(res.data)
      setLoading(false)
      setProducts(res.data)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  useEffect(()=> {
    getProducts()
  },[])


  const handleDelete = async(id) => {
    console.log("delete the item")
    try {
      setLoading(true)
      let res = await axios.delete(``)
      
      getProducts()
      
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  return (
    <>
    <Navbar/>
    <div className='products'>
      
        <Sidebar/>
      
      {Loading ? <h1>...Loading</h1>
        : Err ? <h1>Something Went Wrong</h1>
        : <div className="prod-container">
        {products?.map((item)=> {
          return <Singleproduct {...item} handleDelete = {handleDelete} key={item._id}/>
        })}
      </div>}
    </div>
    </>
  )
}

export default AllProducts
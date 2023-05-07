import { Box, Grid, Heading, Image, Skeleton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/Product/ProductCard'

import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../../../../redux/productReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'


function MenProducts() {
    const [searchParams] = useSearchParams()
    const location = useLocation();
    const dispatch = useDispatch();
    const { product, isLoading, isError } = useSelector((store) => store.ProductReducer)
 
    let obj = {
        params: {
            subCategory: searchParams.getAll("category"),
            sort: searchParams.get("order") && "offerPrice",
            order: searchParams.get("order"),
            brand:searchParams.getAll("brand"),
        }

    }

    useEffect(() => {
        dispatch(GetProduct(obj))
    }, [location.search])
    // console.log("product", product)
    return (
        <> 
            <Box width="100%" 
            // border="1px solid red" 
             >
                <Grid pr="5px" pl="5px" templateColumns={{ sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 1, sm: 5, md: 8, lg: 8 }}>
                {isLoading? [...Array(15).keys()].map((item) => {
                    return (
                      <Stack key={item}>
                        <Skeleton
                          height={{ base: "210px", md: "280px" }}
                          width={{ base: "150px",sm:"280px",md:"150px", lg: "280px" }}
                          borderRadius={"sm"}
                        />
                        <Skeleton width={{ base: "150px",sm:"280px",md:"150px", lg: "280px" }} height="16px" borderRadius={"sm"} />
                        <Skeleton width={{ base: "150px", sm:"280px",md:"150px",lg: "280px" }} height="16px" borderRadius={"sm"} />
                        <Skeleton width={{ base: "150px",sm:"280px",md:"150px", lg: "280px" }} height="16px" borderRadius={"sm"} />
                      </Stack>
                    );
                  }) :
                    product.map((item, i) => {
                        return (


                            <ProductCard key={item.id} data={item} />



                        )
                    })}
                </Grid>
            </Box>

        </>
    )
}

export default MenProducts
import { Box, Grid, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductCard from '../../../components/Product/ProductCard'

import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../../../../redux/productReducer/action'


function MenProducts() {
    const dispatch = useDispatch();
    const { product, isLoading, isError } = useSelector((store) => store.ProductReducer)

    // let obj = {
    //     params: {
    //         _sort: searchParams.get("order") && "price",
    //         _order: searchParams.get("order"),
    //     }

    // }
    useEffect(() => {
        dispatch(GetProduct())
    }, [])
    console.log("product", product)
    return (
        <>
            <Box width="100%" border="1px solid red"  >
                <Grid templateColumns={{ sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 1, sm: 2, md: 5, lg: 5 }}>
                    {product.map((item, i) => {
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
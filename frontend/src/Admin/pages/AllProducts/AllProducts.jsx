import React, { useEffect, useState } from 'react'
import styles from "./allproducts.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Singleproduct from '../../components/Singleproduct/Singleproduct'
import axios from 'axios'
import { useLocation, useSearchParams } from 'react-router-dom'
import Paginate from '../../components/Paginate/Paginate'
import Adminfooter from '../../components/AdminFooter/Adminfooter'
import { useToast } from '@chakra-ui/react'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Err, setErr] = useState(false)
  const [searchParams] = useSearchParams()
  const sort = searchParams.get("sort");
  const order = searchParams.get("order")
  const category = searchParams.getAll("category")
  const page = searchParams.get("page")
  // const limit = searchParams.get("limit") || 20
  const location = useLocation()

  const params = {sort, order, category, page}

  const toast = useToast()
  
    // console.log("order", order)
    // console.log(params)

  const getProducts = async() => {
    try {
      setLoading(true)
    //   let res;
    //    (order && category.length !== 0) ? res =  await axios.get(`http://localhost:8000/userProduct?order=${order}&sort=${sort}&category=${category}`) 
    //    : order ? res = await axios.get(`http://localhost:8000/userProduct?order=${order}&sort=${sort}`)
    //    : category.length !== 0 ? res = await axios.get(`http://localhost:8000/userProduct?category=${category}`)
    //    : res = await axios.get(`http://localhost:8000/userProduct`)
    
    const res =  await axios.get(`https://tame-tan-bee-fez.cyclic.app/userProduct`, {
        params: params
    })
    //   console.log(res.data)
      setLoading(false)
      setProducts(res.data)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  useEffect(()=> {
    getProducts()
  },[location.search])


  const handleDelete = async(id) => {
    // console.log("delete the item", id)
    try {
      // setLoading(true)
      let res = await axios.delete(`https://tame-tan-bee-fez.cyclic.app/adminProduct/delete/${id}`,{
        headers: {
          token: JSON.parse(localStorage.getItem("adminToken"))
        }
      })
      
      // alert(res.data.msg)
      let message = res.data.msg
                    toast({
                        position: 'top',
                          title: message,
                        //   description: "We've created your account for you.",
                          status: 'success',
                          duration: 9000,
                          isClosable: true,
                        })
      getProducts()
      
    } catch (error) {
      // setLoading(false)
      // setErr(true)
      console.log(error)
    }
  }

  return (
    <>
    <Navbar/>
    <div className={styles.products}>
      
        <Sidebar/>
      
      {Loading ? <h1>...Loading</h1>
        : Err ? <h1>Something Went Wrong</h1>
        : <div className={styles.prodcontainer}>
        {products?.map((item)=> {
          return <Singleproduct {...item} handleDelete = {handleDelete} key={item._id}/>
        })}
      </div>}
    </div>
    <Paginate/>
    <Adminfooter/>
    </>
  )
}

export default AllProducts
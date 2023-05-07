import React, { useEffect, useState } from 'react'
import "./allproducts.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Singleproduct from '../../components/Singleproduct/Singleproduct'
import axios from 'axios'
import { useLocation, useSearchParams } from 'react-router-dom'
import Paginate from '../../components/Paginate/Paginate'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Err, setErr] = useState(false)
  const [searchParams] = useSearchParams()
  const sort = searchParams.get("sort");
  const order = searchParams.get("order")
  const category = searchParams.getAll("category")
  const page = useState(searchParams.get("page"))
  const location = useLocation()

  const params = {sort, order, category, page}
  
    // console.log("order", order)
    console.log(params)

  const getProducts = async() => {
    try {
      setLoading(true)
    //   let res;
    //    (order && category.length !== 0) ? res =  await axios.get(`http://localhost:8000/userProduct?order=${order}&sort=${sort}&category=${category}`) 
    //    : order ? res = await axios.get(`http://localhost:8000/userProduct?order=${order}&sort=${sort}`)
    //    : category.length !== 0 ? res = await axios.get(`http://localhost:8000/userProduct?category=${category}`)
    //    : res = await axios.get(`http://localhost:8000/userProduct`)
    
    const res =  await axios.get(`http://localhost:8000/userProduct`, {
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
    console.log("delete the item", id)
    try {
      setLoading(true)
      let res = await axios.delete(`http://localhost:8000/adminProduct/delete/${id}`)
      alert("Product has been deleted")
      
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
    <Paginate/>
    </>
  )
}

export default AllProducts
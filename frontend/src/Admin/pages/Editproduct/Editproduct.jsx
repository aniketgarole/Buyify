import React, { useEffect, useState } from 'react'
import styles from "./editproduct.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Adminfooter from '../../components/AdminFooter/Adminfooter'
import { useToast } from '@chakra-ui/react'
  
const initialState = {
    title : "", 
    brand : "", 
    category: "", 
    subCategory: "", 
    originalPrice: "", 
    discount: "", 
    images: []
}

const Editproduct = () => {

    const [product, setProduct] = useState(initialState)
    const [Loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    const {id} = useParams()
    const toast = useToast()
    // console.log(id)

    const tok = localStorage.getItem('adminToken')
    // console.log("token", tok)

    const getProduct = async() => {

        try {
            setLoading(true)
            let res = await axios.get(`https://tame-tan-bee-fez.cyclic.app/userProduct/${id}`)
            setLoading(false)
            // console.log(res.data)
            setProduct(res.data)
        } catch (error) {
            setLoading(false)
            setErr(true)
        }
    }

    useEffect(()=> {
        getProduct()
    },[])


    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          let res = await axios.patch(`https://tame-tan-bee-fez.cyclic.app/adminProduct/patch/${id}`, product, {
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
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = (e) => {
            let {name, value} = e.target
            if (name == "price" || name == "discount") {
                value = +value
            } else {
                value = value
            }

            setProduct({...product, [name]: value})
    }


    // console.log(product)

    const {title, brand, category, subCategory, originalPrice, discount, images} = product


  return (
    <>
    <Navbar/>
    {Loading ? <h1>...Loading</h1>: err ? <h1>something went wrong</h1>:
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={images[0]} alt={title} />
            <span>Men Slim Fit Casual Shirt</span>
        </div>
        <div className={styles.formdiv}>
            <form>
                <label>Title</label>
                <br />
                <input name="title" type="text" placeholder="product Name" className={styles.forminput} value={title} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Brand</label>
                <br />
                <input name="brand" type="text" placeholder="Product brand" className={styles.forminput} value={brand} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Category</label>
                <br />
                <input name="category" type="text" placeholder="category" className={styles.forminput} value={category} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Subcategory</label>
                <br />
                <input name="subCategory" type="text" placeholder="subCategory" className={styles.forminput} value={subCategory} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Price</label>
                <br />
                <input name="originalPrice" type="number" placeholder="originalPrice" className={styles.forminput} value={originalPrice} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Discount</label>
                <br />
                <input name="discount" type="text" placeholder="discount" className={styles.forminput} value={discount} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <input type="submit" className={styles.submitbtn} onClick={handleSubmit}/>
            </form>
        </div>
    </div>
     
}
<Adminfooter/>
    </>
    )
}

export default Editproduct
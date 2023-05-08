import React, { useEffect, useState } from 'react'
import "./editproduct.styles.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
  
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
    // console.log(id)

    const tok = localStorage.getItem('adminToken')
    console.log("token", tok)

    const getProduct = async() => {

        try {
            setLoading(true)
            let res = await axios.get(`https://tame-tan-bee-fez.cyclic.app/userProduct/${id}`)
            setLoading(false)
            // console.log(res.data)
            setProduct(res.data[0])
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
            alert(res.data.msg)
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
    <div className='main'>
        <div className="image">
            <img src={images[0]} alt={title} />
            <span>Men Slim Fit Casual Shirt</span>
        </div>
        <div className="form-div">
            <form>
                <label>Title</label>
                <br />
                <input name="title" type="text" placeholder="product Name" className='form-input' value={title} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Brand</label>
                <br />
                <input name="brand" type="text" placeholder="Product brand" className='form-input' value={brand} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Category</label>
                <br />
                <input name="category" type="text" placeholder="category" className='form-input' value={category} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Subcategory</label>
                <br />
                <input name="subCategory" type="text" placeholder="subCategory" className='form-input' value={subCategory} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Price</label>
                <br />
                <input name="originalPrice" type="number" placeholder="originalPrice" className='form-input' value={originalPrice} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Discount</label>
                <br />
                <input name="discount" type="text" placeholder="discount" className='form-input' value={discount} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <input type="submit" className='form-input submit-btn' onClick={handleSubmit}/>
            </form>
        </div>
    </div>
     
}
    </>
    )
}

export default Editproduct
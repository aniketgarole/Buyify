import React, { useState } from 'react'
import styles from "./addproduct.module.css"
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Adminfooter from '../../components/AdminFooter/Adminfooter'
import { useToast } from '@chakra-ui/react'

const intitProduct = {
    category: "",
  subCategory: "",
  brand: "",
  title: "",
  offerPrice: "",
  originalPrice: "",
  discount: "",
  quantity: "",
  images: "",
  size: [],
  rating: "",
  ratingCount: ""
}

const Addproduct = () => {

    const [product, setProduct] = useState(intitProduct)

    const toast = useToast()

    const handleChange = (e) => {
        // console.log(e.target)
        let {name, value} = e.target

        
        if (name == "originalPrice" || name == "offerPrice" || name == "quantity" || name == "rating") {
            value = +value
        } else {
            value = value
        }

        if(name == "size") {
            
             if (product.size.includes(value)) {
                let arr = product.size.filter((item)=> {
                    return item !== value
                })

                value = [...arr]
             } else {
                value = [...product.size, value]
             }
        }

       


        setProduct({...product, [name]: value})
    }

    const handleSubmit = async(e) => {
            e.preventDefault()

            let newProduct = {
                category : product.category,
                subCategory: product.subCategory,
                brand: product.brand,
                title: product.title,
                offerPrice: +product.offerPrice,
                originalPrice: +product.originalPrice,
                discount: product.discount,
                quantity: +product.quantity,
                images: [product.images],
                size: product.size,
                rating: +product.rating,
                ratingCount: product.ratingCount

            }

            if (!newProduct.category || !newProduct.subCategory || !newProduct.brand || !newProduct.title || !newProduct.offerPrice || !newProduct.originalPrice || !newProduct.discount || !newProduct.quantity || !newProduct.images || !newProduct.size || !newProduct.rating || !newProduct.ratingCount) {
                alert("Please fill all the fields")
                
            } else {
                try {
                
                    let res = await axios.post(`https://tame-tan-bee-fez.cyclic.app/adminProduct/addProduct`, newProduct,{
                        headers:{
                            token: JSON.parse(localStorage.getItem("adminToken"))
                        }, 
                        
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
                    setProduct(intitProduct)
                } catch (error) {
                    console.log(error)
                }

            }
            
    }

    // console.log(product)

    

  return (
    <>
    <Navbar/>
    <div className={styles.productmain}>
       
         <form className={styles.productform}>
         <h1>Add new product</h1>
        <br />
        <br />
                <label>Title</label>
                <br />
                <input name="title" type="text" placeholder="product Name" className={styles.forminput} value={product.title} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Brand</label>
                <br />
                <input name="brand" type="text" placeholder="Product brand" className={styles.forminput} value={product.brand} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Category</label>
                <br />
                <input name="category" type="text" placeholder="category" className={styles.forminput} value={product.category} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Subcategory</label>
                <br />
                <input name="subCategory" type="text" placeholder="subCategory" className={styles.forminput} value={product.subCategory} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Price</label>
                <br />
                <input name="originalPrice" type="number" placeholder="originalPrice" className={styles.forminput} value={product.originalPrice} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Discount</label>
                <br />
                <input name="discount" type="number" placeholder="discount" className={styles.forminput} value={product.discount} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>offerPrice</label>
                <br />
                <input name="offerPrice" type="number" placeholder="offerPrice" className={styles.forminput} value={product.offerPrice} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Quantity</label>
                <br />
                <input name="quantity" type="number" placeholder="quantity" className={styles.forminput} value={product.quantity} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Image</label>
                <br />
                <input name="images" type="text" placeholder="image" className={styles.forminput} value={product.images} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>Sizes</label>
                <br />
                <div className={styles.check}>
                    <span>XS</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"XS"} onChange={(e)=>handleChange(e)} checked={product.size.includes("XS")}/>
                </div>
                <br />
                <div className={styles.check}>
                    <span>S</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"S"} onChange={(e)=>handleChange(e)} checked={product.size.includes("S")}/>
                </div>
                <br />
                <div className={styles.check}>
                    <span>M</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"M"} onChange={(e)=>handleChange(e)} checked={product.size.includes("M")}/>
                </div>
                <br />
                <div className={styles.check}>
                    <span>L</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"L"} onChange={(e)=>handleChange(e)} checked={product.size.includes("L")}/>
                </div>
                <br />
                <div className={styles.check}>
                    <span>XL</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"XL"} onChange={(e)=>handleChange(e)} checked={product.size.includes("XL")}/>
                </div>
                <br />
                <div className={styles.check}>
                    <span>XXL</span>
                    <input name="size" type="checkbox" placeholder="size" className={styles.forminput} value={"XXL"} onChange={(e)=>handleChange(e)} checked={product.size.includes("XXL")}/>
                </div>
                
                <br />
                <br />
                <label>Rating</label>
                <br />
                <input name="rating" type="number" placeholder="rating" className={styles.forminput} value={product.rating} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <label>RatingCount</label>
                <br />
                <input name="ratingCount" type="number" placeholder="ratingCount" className={styles.forminput} value={product.ratingCount} onChange={(e)=>handleChange(e)}/>
                <br />
                <br />
                <input type="submit" className={styles.submitbtn} onClick={handleSubmit}/>
            </form>
    </div>
            <Adminfooter/>
    </>
  )
}

export default Addproduct















// ratingCount: String,

// "XS",
//                   "S",
//                   "M",
//                   "L",
//                   "XL",
//                   "XXL"
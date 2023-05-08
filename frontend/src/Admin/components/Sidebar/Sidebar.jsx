import React, { useEffect, useState } from 'react'
import "./sidebar.styles.css"
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [order, setOrder] = useState(searchParams.get("order") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "")
  const [category, setCategory] = useState(searchParams.getAll("category") || [])
  const initPage = searchParams.get("page")
  const [page, setPage] = useState(initPage || 1)
  const limit = searchParams.get("limit") || 20


  const handleChangeOrder = (val) => {
    setOrder(val)

    setSort('originalPrice')

    
    
    
  }


  const handleChangeCategory = (e) => {
    // console.log(category)
    if (category.includes(e.target.value)) {
      let  newCategory = category.filter((item)=> {
               return item != e.target.value
       })
  
       setCategory([...newCategory])
     } else {
       setCategory([...category, e.target.value])
     }

  }

  


  useEffect(()=> {
    let params = {page}
    console.log("page in sidebar", page)
    category.length !== 0 && (params.category = category)
    order &&  (params.order = order) && (params.sort = "offerPrice")

    

    setSearchParams(params)
    

    

    

  },[order, category,page])



  return (
    <div className='sidebar'>
      <div className="price">
        <p className="title">
          Sort By Price
        </p>
        <ul className='ul'>
          <div className="li">
            <input type="radio" name="price" onChange={()=>handleChangeOrder(1)} value={1} checked={order == 1}></input>
            <li>Low to High</li>
          </div>
          <div className="li">
            <input type="radio" name="price" onChange={()=>handleChangeOrder(2)} value={2} checked={order == 2}></input>
            <li>High to Low</li>
          </div>
       </ul>
      </div>
      <div className="category">
        <ul className="ul">
          <p className="title">
            Sort By Category
          </p>
          <div className="li">
            <input name={"Mens"} type="checkbox" value={"Mens"} onChange={handleChangeCategory} checked={category.includes("Mens")}/>
            <li>Men</li>
          </div>
          <div className="li">
            <input name={"Womens"} type="checkbox" value={"Womens"} onChange={handleChangeCategory} checked={category.includes("Womens")}/>
            <li>Wonen</li>
          </div>
          <div className="li">
            <input name={"Child"} type="checkbox" value={"Child"} onChange={handleChangeCategory} checked={category.includes("Child")}/>
            <li>Kids</li>
          </div>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
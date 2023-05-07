import React from 'react'
import "./order.css"
import Navbar from '../../components/Navbar/Navbar'
import Prod from '../../components/Prod/Prod'

const Order = () => {

    const products = [
        {
            id: 12323,
            title: "abc",
            price : 2442,
            category: "Men",
            quantity: 4
        },
        {
            id: 12322,
            title: "def",
            price : 2642,
            category: "Men",
            quantity: 3
        },
        {
            id: 10323,
            title: "ghi",
            price : 2440,
            category: "Men",
            quantity: 7
        },
        {
            id: 52323,
            title: "jkl",
            price : 242,
            category: "Men",
            quantity: 1
        },

    ]



  return (
    <>
        <Navbar/>
        <div className="orders">
      <table className='order-table'>
        <thead>

      <tr>
        <th>productId</th>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
        <th>Quantity</th>
        
      </tr>
        </thead>
        <tbody>
      {products?.map((item)=> {
        return <Prod {...item} key={item.id}/>
      })}
      </tbody>
      
      </table>
    </div>
    </>
  )
}

export default Order
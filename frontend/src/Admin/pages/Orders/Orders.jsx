import React from 'react'
import "./orders.css"
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Singleorder from '../../components/SingleOrder/Singleorder'

const Orders = () => {

    const {id} = useParams()
    const orders = [
        { 
          id: "340394",
          price: "3434",
          time: "12 may, 2020",
          
          
        },
        {
          id: "340124",
          price: "324",
          time: "1 June, 2020",
          
        },
        {
          id: "340364",
          price: "1234",
          time: "06 Apr, 2020",
          
        },
        {
          id: "344494",
          price: "3434",
          time: "10 Dec, 2020",
          
        },
      ]
    

  return (
    <>
        <Navbar/>
        <div className="orders">
      <table className='order-table'>
        <thead>

      <tr>
        <th>orderId</th>
        <th>Order price</th>
        <th>order placed at</th>
        <th>Details</th>
        
      </tr>
        </thead>
        <tbody>
      {orders?.map((item)=> {
        return <Singleorder {...item} key={item.id}/>
      })}
      </tbody>
      
      </table>
    </div>
    </>
  )
}

export default Orders
import React from 'react'
import "./users.css"
import Navbar from '../../components/Navbar/Navbar'
import Singleuser from '../../components/Singleuser/Singleuser'

const Users = () => {


  const users = [
    { 
      id: "340394",
      name: "Tony Stark",
      email: "tony@gmail.com",
      contact: "9309209340",
      
    },
    {
      id: "340124",
      name: "Bruce Banner",
      email: "bruce@gmail.com",
      contact: "9309209393",
      
    },
    {
      id: "340364",
      name: "Tony Stark",
      email: "tony@gmail.com",
      contact: "9309209340",
      
    },
    {
      id: "344494",
      name: "Bruce Banner",
      email: "bruce@gmail.com",
      contact: "9309209393",
      
    },
  ]

  return (
    <>
    <Navbar/>
    <div className="users">
      <table className='user-table'>
        <thead>

      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile no.</th>
        <th>Orders</th>
      </tr>
        </thead>
        <tbody>
      {users?.map((item)=> {
        return <Singleuser {...item} key={item.id}/>
      })}
      </tbody>
      
      </table>
    </div>
    </>
  )
}

export default Users
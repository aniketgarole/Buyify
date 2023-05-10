import React, { useEffect, useState } from 'react'
import styles from "./users.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Singleuser from '../../components/Singleuser/Singleuser'
import axios from 'axios'
import Adminfooter from '../../components/AdminFooter/Adminfooter'

const Users = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const[err, setErr] = useState(false)

  const getUsers = async() => {
    try {
      setLoading(true)
      let res = await axios.get(`https://tame-tan-bee-fez.cyclic.app/user`)
      // console.log(res.data)
      setLoading(false)
      setUsers(res.data)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  // const users = [
  //   { 
  //     id: "340394",
  //     name: "Tony Stark",
  //     email: "tony@gmail.com",
  //     contact: "9309209340",
      
  //   },
  //   {
  //     id: "340124",
  //     name: "Bruce Banner",
  //     email: "bruce@gmail.com",
  //     contact: "9309209393",
      
  //   },
  //   {
  //     id: "340364",
  //     name: "Tony Stark",
  //     email: "tony@gmail.com",
  //     contact: "9309209340",
      
  //   },
  //   {
  //     id: "344494",
  //     name: "Bruce Banner",
  //     email: "bruce@gmail.com",
  //     contact: "9309209393",
      
  //   },
  // ]

  return (
    <>
    <Navbar/>
    <div className={styles.users}>
      <table className={styles.usertable}>
        <thead>

      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile no.</th>
        <th>Orders</th>
      </tr>
        </thead>
        {loading ? "Loading..." : err ? "Something Went Wrong" : <tbody>
      {users?.map((item)=> {
        return <Singleuser {...item} key={item._id}/>
      })}
      </tbody>}
      
      </table>
    </div>
    <Adminfooter/>
    </>
  )
}

export default Users
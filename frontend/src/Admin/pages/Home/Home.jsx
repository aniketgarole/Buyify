import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Adminlogin from '../../components/Adminlogin/Adminlogin'
import Adminfooter from '../../components/AdminFooter/Adminfooter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Adminlogin/>
      <Adminfooter/>
    </div>
  )
}

export default Home
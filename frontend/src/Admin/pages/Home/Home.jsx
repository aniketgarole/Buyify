import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Adminlogin from '../../components/Adminlogin/Adminlogin'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Adminlogin/>
    </div>
  )
}

export default Home
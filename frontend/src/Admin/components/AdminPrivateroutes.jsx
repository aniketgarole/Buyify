import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AdminPrivateroutes = ({children}) => {

    const adminToken = localStorage.getItem("adminToken")
    const location = useLocation()

    if(adminToken) {
        return children
    } else {
        return <Navigate to="/admin" state={location.pathname}/>
    }


  
}

export default AdminPrivateroutes
import React, {useEffect} from "react";
import { Navigate } from "react-router";
import { useToast } from "@chakra-ui/react";


const PrivateRoute = ({ children }) => {
  const toast = useToast()
  let token = localStorage.getItem("token")
  console.log(token)
  if(token){
    return children
 }else{
  toast({
    description: "You need to login First",
    status: "error",
    duration: 1000,
    isClosable: true,
  });
return <Navigate to = "/login"/>
 }
    
}
export default PrivateRoute;
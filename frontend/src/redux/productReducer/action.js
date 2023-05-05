
import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";


export const GetProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get("http://localhost:8000/userProduct",paramObj)
    .then((res)=>{
        console.log("action",res)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_PRODUCT_FAILURE})
    })
}
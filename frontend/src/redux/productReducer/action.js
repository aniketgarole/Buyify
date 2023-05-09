
import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionType";


export const GetProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get("https://tame-tan-bee-fez.cyclic.app/userProduct",paramObj)
    .then((res)=>{
        // console.log("action",res)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_PRODUCT_FAILURE})
    })
}


export const GetSingleProduct=(id)=>(dispatch)=>{
    dispatch({type:GET_SINGLE_PRODUCT_REQUEST})
    axios.get(`https://tame-tan-bee-fez.cyclic.app/userProduct/${id}`)
    .then((res)=>{
        // console.log("single",res.data)
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_SINGLE_PRODUCT_FAILURE})
    })
}
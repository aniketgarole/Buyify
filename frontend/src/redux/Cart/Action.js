// import {
//   GET_CART_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   DELETE_CART_SUCCESS,
//   POST_CART_SUCCESS,
//   CART_UPDATE_QTY,
//   CART_DELETE_ITEM
// } from './ActionType'
// import axios from 'axios'

// export const getCartProductsRequestAction = () => {
//   return { type: GET_CART_REQUEST }
// }

// export const getCartProductsSuccessAction = (payload) => {
//   return { type: GET_CART_SUCCESS, payload }
// }

// export const getCartProductsFailureAction = () => {
//   return { type: GET_CART_FAILURE }
// }

// export const postCartProductsSuccessAction = (payload) => {
//   return { type: POST_CART_SUCCESS, payload }
// }

// export const DeleteCartSuccess = () => {
//   return { type: DELETE_CART_SUCCESS }
// }

// export const cartUpdateQty = (payload) => {
//   return { type: CART_UPDATE_QTY, payload }
// }


// export const cartdeleteitem = (payload) => {
//   return { type: CART_DELETE_ITEM, payload }
// }

// export const getCartProducts = () => async (dispatch) => {
//   console.log('token', localStorage.getItem('token'))
//   dispatch(getCartProductsRequestAction())
//   return axios
//     .get('https://tame-tan-bee-fez.cyclic.app/cart', {
//       headers: {
//         'Content-Type': 'application/json',
//         token: localStorage.getItem('token'),
//       },
//     })
//     .then((res) => {
//       console.log('res', res)
//       dispatch(getCartProductsSuccessAction(res.data))
//     })
//     .catch((err) => {
//       console.log('err', err)
//       dispatch(getCartProductsFailureAction())
//     })
// }

// export const deleteCartdata = (id) => async (dispatch) => {
//   dispatch(getCartProductsRequestAction())
//   return axios
//     .delete(`https://tame-tan-bee-fez.cyclic.app/cart/${id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: localStorage.getItem('token'),
//       },
//     })
//     .then((res) => {
//       dispatch(DeleteCartSuccess())
//     })
//     .catch((err) => {
//       dispatch(getCartProductsFailureAction())
//     })
// }

// export const addCartData = (payload) => async (dispatch) => {
//   dispatch(getCartProductsRequestAction())
//   console.log(payload)

//   console.log('token', localStorage.getItem('token'))

//   let res = await fetch(`https://tame-tan-bee-fez.cyclic.app/cart/addCart`, {
//     method: `POST`,
//     headers: {
//       token: localStorage.getItem('token') ,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//   .then((res) => {
//     dispatch(postCartProductsSuccessAction())
//     console.log("dispatch",res.data);
//   })
//   .catch((err) => {
//     dispatch(getCartProductsFailureAction())
//   })
//   // let data = await res.json()

//   console.log(res.data)
// }


import axios from 'axios';
import {
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  POST_CART_SUCCESS,
  CART_UPDATE_QTY,
  CART_DELETE_ITEM
} from './ActionType';

export const getCartProductsRequestAction = () => {
  return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = (error) => {
  return { type: GET_CART_FAILURE, error };
};

export const postCartProductsSuccessAction = (payload) => {
  return { type: POST_CART_SUCCESS, payload };
};

export const DeleteCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS };
};

export const cartUpdateQty = (payload) => {
  return { type: CART_UPDATE_QTY, payload };
};

export const cartdeleteitem = (payload) => {
  return { type: CART_DELETE_ITEM, payload };
};

export const getCartProducts = () => async (dispatch) => {
  console.log('token', localStorage.getItem('token'));
  dispatch(getCartProductsRequestAction());
  try {
    const response = await axios.get('https://tame-tan-bee-fez.cyclic.app/cart', {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
    });
    console.log('response', response.data);
    dispatch(getCartProductsSuccessAction(response.data));
  } catch (error) {
    console.log('error', error);
    dispatch(getCartProductsFailureAction(error));
  }
};

export const deleteCartdata = (id) => async (dispatch) => {
  dispatch(getCartProductsRequestAction());
  try {
    await axios.delete(`https://tame-tan-bee-fez.cyclic.app/cart/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
    });
    dispatch(DeleteCartSuccess());
  } catch (error) {
    dispatch(getCartProductsFailureAction(error));
  }
};

// export const addCartData = (payload) => async (dispatch) => {
//   dispatch(getCartProductsRequestAction());
//   console.log(payload);
//   console.log('token', localStorage.getItem('token'));
//   try {
//     const response = await axios.post(
//       'https://tame-tan-bee-fez.cyclic.app/cart/addCart',
//       payload,
//       {
//         headers: {
//           token: localStorage.getItem('token'),
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     dispatch(postCartProductsSuccessAction(response.data));
//     console.log('response', response.data);
//   } catch (error) {
//     dispatch(getCartProductsFailureAction(error));
//   }
// };

export const addCartData = (payload) => async (dispatch) => {
  dispatch(getCartProductsRequestAction());
  console.log(payload);
  console.log('token', localStorage.getItem('token'));
  try {
    const response = await axios.post(
      'https://tame-tan-bee-fez.cyclic.app/cart/addCart',
       payload , // Pass the payload as an object with the 'cart' property
      {
        headers: {
          token: localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch(postCartProductsSuccessAction(response.data));
    console.log('response', response.data);
  } catch (error) {
    dispatch(getCartProductsFailureAction(error));
  }
};

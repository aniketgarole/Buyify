import { GetCartAPI,  addToCartAPI } from "./cart.api";
import * as types from "./cart.types";

const cartRequest = () => {
  return { type: types.CART_REQUEST };
};
const cartError = () => {
  return { type: types.CART_ERROR };
};
const CartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

const Cartdelete = (payload) => {
  return { type: types.DELETE_CART, payload };
};

export const cartQtyChange = (payload) => {
  return { type: types.CART_QTY_CHANGE, payload };
};

export const cartAddData = (payload) => {
  return { type: types.CART_ADD_SUCCESS, payload };
};

export const getCart = (id) => async (dispatch) => {
  if (!id) {
    return;
  }
  dispatch(cartRequest());
  try {
    let res = await GetCartAPI(id);
    dispatch(CartSuccess(res));
  } catch (error) {
    console.log(error);
    dispatch(cartError());
  }
};

export const addToCart = (id, item) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    await addToCartAPI(id, item);

    dispatch(cartAddData(item));
  } catch (error) {
    dispatch(cartError());
  }
};

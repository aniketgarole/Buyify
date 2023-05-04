import axios from 'axios';

export const GetCartAPI = async (id) => {
  try {
    const response = await axios.get(`BaseURL${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCartAPI = async (id, cartData) => {
  try {
    const response = await axios.post('BaseURL/cart', {
      cart: cartData,
      userId: id,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
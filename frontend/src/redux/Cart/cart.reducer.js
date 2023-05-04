import * as types from "./cart.types";
const initialState = {
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 2000.5,
      description:
        "ONECYA ROYAL FANCY Traditional Indoor Wall Light Brown Color Globe Shape E27 Holder Upto 100-Watts Made in India (Bulb Not Included) Pack of 1(Wood)",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/31iuuphSvGL._AC_AA180_.jpg",
      rating: {
        rate: 3.9,
        count: 1120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 1000.05,
      description:
        "Groeien 15watt LED Sconce Modern Transparent Indoor Home Acrylic Wall Lamp - Warm White (1)",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/61qdXgb+j5L._SX679_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_SUCCESS:
      return { ...state, cart: payload.cart };

    case types.CART_ADD_SUCCESS: {
      return { ...state, cart: payload };
    }

    case types.CART_QTY_CHANGE: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id == payload.id) {
            return { ...item, qtt: payload.qtt };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export { reducer };

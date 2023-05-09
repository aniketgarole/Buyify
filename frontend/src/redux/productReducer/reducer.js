import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    singleLoading: false,
    singleError: false,
    product: [],
    singleProduct: {},
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, isLoading: true }
        case GET_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, product: payload }
        case GET_PRODUCT_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case GET_SINGLE_PRODUCT_REQUEST:
            return { ...state, singleLoading: true }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return { ...state, singleLoading: false, singleProduct: payload }
        case GET_SINGLE_PRODUCT_FAILURE:
            return { ...state, singleLoading: false, singleError: true }
        default: return state
    }
}

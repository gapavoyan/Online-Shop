import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./slices/product.Slice"
const store = configureStore({
    reducer:{
        product:productSlice,
    },
})
export default store
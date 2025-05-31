import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    console.log(fetchAllFilteredProducts,'fetchAllFilteredProducts');
    
    const result = await axios.get(
      "http://localhost:5000/api/shop/products/get"
    );
    console.log(result);
    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
        // console.log(action.payload.data);
        
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
    //   .addCase(fetchProductDetails.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(fetchProductDetails.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.productDetails = action.payload.data;
    //   })
    //   .addCase(fetchProductDetails.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.productDetails = null;
    //   });
  },
});

export default shoppingProductSlice.reducer;

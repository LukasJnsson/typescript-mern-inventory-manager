
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../schemas/product.schema';


export const getProducts = createAsyncThunk(
  'products/get', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/products');
        return response.data;
    }
    catch (err) {
        return err;
    };
});

export const postProduct = createAsyncThunk(
  'products/post', async (product: Product) => {
  try {
      const response = await axios.post('http://localhost:3001/api/v1/products', product);
      return response.data;
  }
  catch (err) {
      return err;
  };
});


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(postProduct.fulfilled, (state) => {
        state.isLoading = true;
      })
  },
});


export default productsSlice.reducer;
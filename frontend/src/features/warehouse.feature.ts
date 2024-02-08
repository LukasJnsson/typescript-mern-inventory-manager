
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Warehouse } from '../schemas/warehouse.schema';


export const getWarehouses = createAsyncThunk(
  'warehouses/get', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/warehouses');
        return response.data;
    }
    catch (err) {
        return err;
    };
});

export const postWarehouse = createAsyncThunk(
  'warehouses/post', async (warehouse: Warehouse) => {
  try {
      const response = await axios.post('http://localhost:3001/api/v1/warehouses', warehouse);
      return response.data;
  }
  catch (err) {
      return err;
  };
});


const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState: {
    warehouses: [],
    isLoading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWarehouses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWarehouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.warehouses = action.payload;
      })
      .addCase(postWarehouse.fulfilled, (state, action) => {
        state.isLoading = true;
      })
  },
});


export default warehouseSlice.reducer;
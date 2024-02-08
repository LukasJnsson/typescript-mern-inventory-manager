
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getInventory = createAsyncThunk(
  'inventories/get', async () => {
  try {
      const response = await axios.get('http://localhost:3001/api/v1/inventories');
      return response.data;
  }
  catch (err) {
      return err;
  };
});

export const getInventoryAtDate = createAsyncThunk(
  'inventories/dates/get', async () => {
  try {
      const response = await axios.get('http://localhost:3001/api/v1/inventories/dates');
      return response.data;
  }
  catch (err) {
      return err;
  };
});

export const getInventoryOptions = createAsyncThunk(
  'inventories/options/get', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/inventories/options');
        return response.data;
    }
    catch (err) {
        return err;
    };
});


const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventory: [],
    isInventoryLoading: true,
    inventoryAtDate: [],
    isInventoryAtDateLoading: true,
    warehouseOptions: [],
    productOptions: [],
    isInventoryOptionsLoading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInventory.pending, (state) => {
        state.isInventoryLoading = true;
      })
      .addCase(getInventory.fulfilled, (state, action) => {
        state.isInventoryLoading = false;
        state.inventory = action.payload;
      })
      .addCase(getInventoryAtDate.pending, (state) => {
        state.isInventoryAtDateLoading = true;
      })
      .addCase(getInventoryAtDate.fulfilled, (state, action) => {
        state.isInventoryAtDateLoading = false;
        state.inventoryAtDate = action.payload;
      })
      .addCase(getInventoryOptions.pending, (state) => {
        state.isInventoryOptionsLoading = true;
      })
      .addCase(getInventoryOptions.fulfilled, (state, action) => {
        state.isInventoryOptionsLoading = false;
        state.warehouseOptions = action.payload.warehouses;
        state.productOptions = action.payload.products;
      })
  },
});


export default inventorySlice.reducer;
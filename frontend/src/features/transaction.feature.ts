
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Transaction } from '../schemas/transaction.schema';


export const getTransactions = createAsyncThunk(
  'transactions/get', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/transactions');
        return response.data;
    }
    catch (err) {
        return err;
    };
});

export const postTransaction = createAsyncThunk(
  'transactions/post', async (transaction: Transaction) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/transactions', transaction);
        return response.data;
    }
    catch (err) {
        return err;
    };
});


const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(postTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postTransaction.fulfilled, (state) => {
        state.isLoading = false;
      })
  },
});


export default transactionSlice.reducer;
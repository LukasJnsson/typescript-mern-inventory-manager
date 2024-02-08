
import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/darkMode.feature";
import productsSlice from "../features/product.feature";
import warehouseSlice from "../features/warehouse.feature";
import inventorySlice from "../features/inventory.feature";
import transactionSlice from "../features/transaction.feature";


export default configureStore({
    reducer: {
        darkMode: darkModeSlice,
        products: productsSlice,
        warehouses: warehouseSlice,
        inventories: inventorySlice,
        transactions: transactionSlice
    }
});

import express from "express";
const router = express.Router();
import productRouter from './product.routes.js';
import warehouseRouter from './warehouse.routes.js';
import inventoryRouter from './inventory.routes.js';
import transactionRouter from './transaction.routes.js';


router.use('/products', productRouter);

router.use('/warehouses', warehouseRouter);

router.use('/inventories', inventoryRouter);

router.use('/transactions', transactionRouter);


export default router;
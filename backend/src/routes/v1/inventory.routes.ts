
import express from "express";
const router = express.Router();
import inventoryController from "../../controllers/inventory.controller.js";


router.get('/', inventoryController.getInventory);

router.get('/dates', inventoryController.getInventoryAtDate);

router.get('/options', inventoryController.getInventoryOptions);


export default router;

import express from "express";
const router = express.Router();
import warehouseController from "../../controllers/warehouse.controller.js";
import validateBody from "../../middlewares/validateBody.middleware.js";
import warehouseSchema from "../../schemas/warehouse.schema.js";


router.get('/', warehouseController.getWarehouses);

router.post('/', validateBody(warehouseSchema), warehouseController.postWarehouse);


export default router;
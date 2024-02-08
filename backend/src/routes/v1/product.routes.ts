
import express from "express";
const router = express.Router();
import productController from "../../controllers/product.controller.js";
import validateBody from "../../middlewares/validateBody.middleware.js";
import productSchema from "../../schemas/product.schema.js";


router.get('/', productController.getProducts);

router.post('/', validateBody(productSchema), productController.postProduct);


export default router;
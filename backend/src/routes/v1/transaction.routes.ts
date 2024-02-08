
import express from "express";
const router = express.Router();
import transactionController from "../../controllers/transaction.controller.js";
import validateBody from "../../middlewares/validateBody.middleware.js";
import transactionSchema from "../../schemas/transaction.schema.js";


router.get('/', transactionController.getTransactions);

router.post('/', validateBody(transactionSchema), transactionController.postTransaction);


export default router;
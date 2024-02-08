
import { Request, Response, NextFunction } from "express";
import { getTransactions, postTransaction } from "../services/transaction.service.js";
import { Transaction } from "../schemas/transaction.schema.js";


export default {
    /**
     * GET transactions
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getTransactions: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const transactions = await getTransactions();
            res.status(200).json(transactions);
        } 
        catch (err) {
            next(err);
        }
    },
    /**
     * POST transaction
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    postTransaction: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const transactionBody: Transaction = req.body;
            const transaction = await postTransaction(transactionBody);
            res.status(200).json(transaction);
        } 
        catch (err) {
            next(err);
        }
    }
};

import { Request, Response, NextFunction } from "express";
import { getProducts, postProduct } from "../services/product.service.js";
import { Product } from "../schemas/product.schema.js";


export default {
    /**
     * GET products
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getProducts: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const products = await getProducts();
            res.status(200).json(products);
        } 
        catch (err) {
            next(err);
        }
    },
    /**
     * POST product
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    postProduct: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const productBody: Product = req.body;
            const product = await postProduct(productBody);
            res.status(200).json(product);
        } 
        catch (err) {
            next(err);
        }
    }
};
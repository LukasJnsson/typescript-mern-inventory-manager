
import { Request, Response, NextFunction } from "express";
import { getInventory, getInventoryAtDate } from "../services/inventory.service.js";
import { getWarehouses } from "../services/warehouse.service.js";
import { getProducts } from "../services/product.service.js";


export default {
    /**
     * GET inventory
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getInventory: async function (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const inventoryBalance = await getInventory();
            res.status(200).json(inventoryBalance);
        } 
        catch (err) {
            next(err);
        }
    },
    /**
     * GET inventory at date
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getInventoryAtDate: async function (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const endDate = new Date("2024-01-01");
            const inventoryBalance = await getInventoryAtDate(endDate);
            res.status(200).json(inventoryBalance);
        } 
        catch (err) {
            next(err);
        }
    },
    /**
     * GET inventory options
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getInventoryOptions: async function (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const warehouses = await getWarehouses();
            const products = await getProducts();
            res.status(200).json({ warehouses, products });
        } 
        catch (err) {
            next(err);
        }
    }
};
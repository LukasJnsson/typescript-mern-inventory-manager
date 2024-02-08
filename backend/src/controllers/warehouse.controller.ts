
import { Request, Response, NextFunction } from "express";
import { getWarehouses, postWarehouse } from "../services/warehouse.service.js";
import { Warehouse } from "../schemas/warehouse.schema.js";


export default {
    /**
     * GET warehouses
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    getWarehouses: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const warehouses = await getWarehouses();
            res.status(200).json(warehouses);
        } 
        catch (err) {
            next(err);
        }
    },
    /**
     * POST warehouse
     * @async
     * @param {Request} req - Request object
     * @param {Response} res - Response object
     * @param {NextFunction} next - Next middleware
     * @returns {Promise<void>}
     */
    postWarehouse: async function (req: Request, res: Response, next: NextFunction) {
        try {
            const warehouseBody: Warehouse = req.body;
            const warehouse = await postWarehouse(warehouseBody);
            res.status(200).json(warehouse);
        } 
        catch (err) {
            next(err);
        }
    }
};

import db from "../configs/db.config.js";
import Warehouse from "../models/warehouse.model.js";


/**
 * Retrieves warehouses
 * @async
 * @returns {Promise<Array<Object>>}
 */
export async function getWarehouses() {
    try {
        await db.connect();
        const warehouses = await Warehouse.find().select('-_id -__v');
        return warehouses;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Creates warehouse
 * @async
 * @returns {Promise<Object>}
 */
export async function postWarehouse(body: any) {
    try {
        await db.connect();
        const warehouse = await Warehouse.create(body);
        return warehouse;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};
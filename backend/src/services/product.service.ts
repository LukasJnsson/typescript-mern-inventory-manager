
import db from "../configs/db.config.js";
import Product from "../models/product.model.js";


/**
 * Retrieves products
 * @async
 * @returns {Promise<Array<Object>>}
 */
export async function getProducts() {
    try {
        await db.connect();
        const products = await Product.find().select('-_id -__v');
        return products;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Creates product
 * @async
 * @returns {Promise<Object>}
 */
export async function postProduct(body: any) {
    try {
        await db.connect();
        const product = await Product.create(body);
        return product;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};

import db from "../configs/db.config.js";
import Transaction from "../models/transaction.model.js";


/**
 * Retrieves transaction
 * @async
 * @returns {Promise<Array<Object>>}
 */
export async function getTransactions() {
    try {
        await db.connect();
        const transactions = await Transaction.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "product",
                    foreignField: "id",
                    as: "product"
                }
            },
            {
                $lookup: {
                    from: "warehouses",
                    localField: "warehouse",
                    foreignField: "id",
                    as: "warehouse"
                }
            },
            {
                $unwind: "$product"
            },
            {
                $unwind: "$warehouse"
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    warehouseId: "$warehouse.id",
                    warehouse: "$warehouse.name",
                    productId: "$product.id",
                    product: "$product.name",
                    change: "$amount",
                    date: 1
                }
            }
        ]);
        return transactions;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Creates transaction
 * @async
 * @returns {Promise<Object>}
 */
export async function postTransaction(body: any) {
    try {
        await db.connect();
        const transaction = await Transaction.create(body);
        return transaction;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};
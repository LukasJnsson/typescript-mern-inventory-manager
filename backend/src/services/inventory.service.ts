
import db from "../configs/db.config.js";
import Transaction from "../models/transaction.model.js";


/**
 * Retrieves inventory
 * @async
 * @returns {Promise<Array<Object>>}
 */
export async function getInventory() {
    try {
        await db.connect();
        const inventory = await Transaction.aggregate([
            {
              $group: {
                _id: { product: "$product", warehouse: "$warehouse" },
                amount: { $sum: "$amount" }
              }
            },
            {
              $lookup: {
                from: "products",
                localField: "_id.product",
                foreignField: "id",
                as: "product"
              }
            },
            {
              $lookup: {
                from: "warehouses",
                localField: "_id.warehouse",
                foreignField: "id",
                as: "warehouse"
              }
            },
            {
              $project: {
                _id: 0,
                product: { $arrayElemAt: ["$product.name", 0] },
                warehouse: { $arrayElemAt: ["$warehouse.name", 0] },
                id: { $concat: ["$_id.warehouse", "$_id.product"] },
                amount: "$amount"
              }
            },
            {
              $match: {
                amount: { $gt: 0 }
              }
            }
          ]);
          return inventory;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Retrieves inventory at date
 * @async
 * @returns {Promise<Array<Object>>}
 */
export async function getInventoryAtDate(endDate: Date) {
  try {
      await db.connect();
      const inventory = await Transaction.aggregate([
        {
          $match: {
            date: { $lt: new Date(endDate) }
          }
        },
        {
          $group: {
            _id: { product: "$product", warehouse: "$warehouse" },
            amount: { $sum: "$amount" }
          }
        },
        {
          $lookup: {
            from: "products",
            localField: "_id.product",
            foreignField: "id",
            as: "product"
          }
        },
        {
          $lookup: {
            from: "warehouses",
            localField: "_id.warehouse",
            foreignField: "id",
            as: "warehouse"
          }
        },
        {
          $project: {
            _id: 0,
            id: { $concat: ["$_id.warehouse", "$_id.product"] },
            warehouse: { $arrayElemAt: ["$warehouse.name", 0] },
            product: { $arrayElemAt: ["$product.name", 0] },
            amount: "$amount",
            date: endDate
          }
        },
      ]);
      return inventory;
  }
  catch (err) {
      return err;
  }
  finally {
      await db.disconnect();
  };
};
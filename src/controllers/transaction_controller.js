const { QueryTypes } = require("sequelize");
const { successResponse, errorResponse } = require("../helper/response");
const { db } = require("../config");

exports.Add = async (req, res) => {
   try {
      const { total_price, money, change, products } = req.body;

      const insertQuery = `
      INSERT INTO transactions (total_price, money, change)
      VALUES (:totalPrice, :money, :change)
      RETURNING id
    `;

      const [result, metadata] = await db.query(insertQuery, {
         replacements: { totalPrice: total_price, money, change },
         type: QueryTypes.INSERT,
      });

      const insertedTransactionId = result[0].id;

      for (const product of products) {
         const insertTransactionProductsQuery = `
        INSERT INTO TransactionProducts (transaction_id, product_id, quantity)
        VALUES (:transactionId, :productId, :quantity)
      `;

         await db.query(insertTransactionProductsQuery, {
            replacements: { transactionId: insertedTransactionId, productId: product.productId, quantity: product.quantity },
            type: QueryTypes.INSERT,
         });
      }

      successResponse(res, null);
   } catch (error) {
      console.log("Error From Add", error.message);
      errorResponse(res, 500, error.message);
   }
};

exports.GetAll = async (req, res) => {
   try {
      const data = [];

      successResponse(res, data);
   } catch (error) {
      console.log("Error From Add", error.message);

      errorResponse(res, 500, error.message);
   }
};

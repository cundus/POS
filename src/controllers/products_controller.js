const { QueryTypes } = require("sequelize");
const { db } = require("../config");
const { successResponse, errorResponse } = require("../helper/response");

exports.Add = async (req, res) => {
   try {
      const { name, price } = req.body;
      const { file } = req;

      if (!file) {
         return errorResponse(res, 400, "No image found, please upload image!");
      }

      await db.query(
         `
      INSERT INTO products (name, image, price) VALUES
     ('${name}', '/uploads/${file.filename}', ${price})
      `,
         { type: QueryTypes.INSERT }
      );

      successResponse(res, null);
   } catch (error) {
      console.log("Error From Add", error.message);

      errorResponse(res, 500, error.message);
   }
};

exports.GetAll = async (req, res) => {
   try {
      const data = await db.query(
         `
        SELECT * FROM products;
         `,
         { type: QueryTypes.SELECT }
      );

      successResponse(res, data);
   } catch (error) {
      console.log("Error From Add", error.message);

      errorResponse(res, 500, error.message);
   }
};

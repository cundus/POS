exports.errorResponse = (res, status, message) => {
   return res.status(status).json({
      message,
   });
};

exports.successResponse = (res, data) => {
   return res.json({
      message: "Success",
      data,
   });
};

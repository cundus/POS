const multer = require("multer");
const productsController = require("../controllers/products_controller");
const transactionsController = require("../controllers/products_controller");
const router = require("express").Router();

const storage = multer.diskStorage({
   destination: (req, file, callback) => {
      callback(null, "uploads/");
   },
   filename: (req, file, callback) => {
      const originalName = file.originalname;
      const ext = originalName.substring(originalName.lastIndexOf("."));
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      callback(null, uniqueSuffix + ext);
   },
});

const upload = multer({ storage: storage });

router.post("/product/add", upload.single("image"), productsController.Add);
router.get("/products", productsController.GetAll);

router.post("/transaction/add", transactionsController.Add);

module.exports = router;

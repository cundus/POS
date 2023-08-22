const multer = require("multer");
const productsController = require("../controllers/products_controller");
const transactionsController = require("../controllers/products_controller");
const router = require("express").Router();

const upload = multer({ dest: "uploads/" });

router.post("/products/add", upload.single("image"), productsController.Add);
router.get("/products", productsController.GetAll);

router.post("/products/add", productsController.Add);
router.get("/products", productsController.GetAll);

module.exports = router;

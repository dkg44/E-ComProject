const express= require("express");
const { getAllProducts, creaetProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const router= express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(creaetProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports= router
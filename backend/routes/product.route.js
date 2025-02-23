import express from "express";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controller/prodcut.controller.js";

const router = express.Router();

//add product
router.post("/", addProduct);

//get product
router.get("/", getProduct);

//update prodoct
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

export default router;

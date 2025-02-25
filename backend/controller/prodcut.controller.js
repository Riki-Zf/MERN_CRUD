import mongoose from "mongoose";
import Product from "../models/product.models.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    res.status(200).json({ message: "update successfully" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    res.status(200).json({ message: "delete successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

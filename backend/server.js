import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());

//route
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port http://localhost:" + PORT);
});

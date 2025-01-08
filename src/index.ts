import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboard.routes";
import productsRoutes from "./routes/products.routes";
/*Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Routes*/
app.get("/hello", (req, res) => {
  res.send("Hello world");
});
app.use("/dashboard", dashboardRoutes);
app.use("/products", productsRoutes);
/*Server*/
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});

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
app.use("/dashboard", dashboardRoutes);
app.use("/products", productsRoutes);
app.get("/", (req, res) => {
  res.json({
    mensaje: "Welcome to Dashboard API REST",
    version: "1.0.0",
    routes: [
      {
        endpoint: "/dashboard",
        metodo: "GET",
        description: "Get Dashboard Metrics",
      },
      {
        endpoint: "/products",
        metodo: "GET",
        description: "Get Products List",
      },
      { endpoint: "/products", metodo: "POST", description: "Create Product" },
    ],
  });
});

/*Server*/
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});

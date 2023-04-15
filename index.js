import express from "express";
import sequelize from "./db.js";
import {
  Basket,
  BasketDevice,
  Brand,
  Device,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand,
  User,
} from "./models/models.js";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload";
import { path, __dirname } from "./utils/path.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "static")));
app.use(fileUpload({}));

app.use("/api", router);

//// the last check
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Server is OK");
    });
  } catch (err) {
    console.log(err);
  }
};

start();

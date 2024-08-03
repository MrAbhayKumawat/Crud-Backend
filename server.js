import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import ConnectToDb from "./DB/DataBase.js";
import userRoutes from "./routes/userRouter.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;

// DB Connection
ConnectToDb();

// Use Routes
app.use("/api", userRoutes);

// Port listen
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});

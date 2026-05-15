import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

const allowedOrigins = process.env.CLIENT_URL.split(",");

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/user", router);

app.get("/", (req, res) => {

  res.send("API Running...");

});

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

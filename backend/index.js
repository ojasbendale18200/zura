import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./config/db.js";
import userRouter from "./routes/User.route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("error connecting to db");
  }
  console.log(`server listening on port ${process.env.PORT}`);
});

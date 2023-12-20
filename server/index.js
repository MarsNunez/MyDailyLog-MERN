import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRoutes } from "./routes/UserRoutes.js";
import { PostRoutes } from "./routes/PostRoutes.js";

const app = express();

app.use(express.json()); // Solo usar cuando estemos recibiendo datos en json
app.use(cors());

app.get("/", (req, res) => {
  res.json("Zzup!");
});

app.use(UserRoutes);
app.use(PostRoutes);

mongoose
  .connect(
    "mongodb+srv://root:root@mydailylog.jikj5el.mongodb.net/mydailylog?retryWrites=true&w=majority"
  )
  .then(
    app.listen(3001, () => {
      console.log("⚡️ Listening on PORT 3001");
    })
  )
  .catch((e) => {
    console.log("Error: ", e.message);
  });

import express from "express";
import { log } from "./middleware/logger";
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  await log("backend", "info", "route", "Root endpoint was hit");
  res.send("hello abhigna");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

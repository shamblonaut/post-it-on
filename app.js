import express from "express";
import path from "path";

import indexRouter from "./routes/indexRoutes.js";
import { calculateFontSize } from "./utils.js";

const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use((_req, res, next) => {
  res.locals.calculateFontSize = calculateFontSize;
  next();
});

app.use("/", indexRouter);

app.listen(PORT, HOSTNAME, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on http://${HOSTNAME}:${PORT}`);
});

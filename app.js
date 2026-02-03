import express from "express";
import path from "path";

import indexRouter from "./routes/indexRoutes.js";

const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use("/", indexRouter);

app.listen(PORT, HOSTNAME, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on http://${HOSTNAME}:${PORT}`);
});

import express from "express";

const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const app = express();

app.use((_req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, HOSTNAME, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on http://${HOSTNAME}:${PORT}`);
});

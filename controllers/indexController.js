import { posts } from "../db.js";

export function getIndex(_req, res) {
  res.render("index", { posts });
}

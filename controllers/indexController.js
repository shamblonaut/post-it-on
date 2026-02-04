import { posts } from "../db.js";

export function getIndexPage(_req, res) {
  res.render("index", { posts });
}

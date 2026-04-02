import { readAllPosts } from "../db/queries.js";

export async function getIndexPage(_req, res) {
  res.render("index", { posts: await readAllPosts() });
}

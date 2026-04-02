import { readPost } from "../db/queries.js";

export async function getNote(req, res) {
  const post = await readPost(req.params.id);
  if (!post) {
    res.sendStatus(404);
  }

  res.render("note", { post });
}

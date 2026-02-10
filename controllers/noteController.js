import { getPostById } from "../db.js";

export function getNote(req, res) {
  const post = getPostById(req.params.id);
  if (!post) {
    res.sendStatus(404);
  }

  res.render("note", { post });
}

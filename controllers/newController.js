import { posts } from "../db.js";

export function getNewPage(_req, res) {
  res.render("new");
}

export function postNewNote(req, res) {
  const { note, color } = req.body;

  posts.push({ note, color });

  res.redirect("/");
}

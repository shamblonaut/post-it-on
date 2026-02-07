import { posts } from "../db.js";

export function getNewPage(_req, res) {
  res.render("new");
}

export function postNewNote(req, res) {
  const { note, color } = req.body;

  posts.push({
    note,
    color,
    rotation: (Math.random() * 20 - 10).toFixed(2),
  });

  res.redirect("/");
}

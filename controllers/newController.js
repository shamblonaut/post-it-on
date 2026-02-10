import { posts } from "../db.js";

export function getNewPage(_req, res) {
  res.render("new");
}

export function postNewNote(req, res) {
  const { author, note, color } = req.body;

  posts.push({
    id: crypto.randomUUID(),
    author,
    note,
    color,
    createdAt: new Date(),
    rotation: (Math.random() * 20 - 10).toFixed(2),
  });

  res.redirect("/");
}

import { createPost } from "../db/queries.js";

export function getNewPage(_req, res) {
  res.render("new");
}

export async function postNewNote(req, res) {
  const { author, note, color } = req.body;

  await createPost({
    author,
    note,
    color: color ?? "yellow",
    rotation: Math.random() * 10 - 5,
  });

  res.redirect("/");
}

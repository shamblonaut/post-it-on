import { body, matchedData, validationResult } from "express-validator";
import { createPost } from "../db/queries.js";

export function getNewPage(_req, res) {
  res.render("new");
}

export const postNewNote = [
  [
    body("author").trim().notEmpty().withMessage("Author should not be empty"),
    body("note").trim().notEmpty().withMessage("Note should not be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("new", { errors: errors.array() });
    }

    const { author, note, color } = matchedData(req);
    await createPost({
      author,
      note,
      color: color ?? "yellow",
      rotation: Math.random() * 10 - 5,
    });

    res.redirect("/");
  },
];

import pool from "./pool.js";

export async function readAllPosts() {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
}

export async function readPost(id) {
  const { rows } = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return rows[0];
}

export async function createPost({ author, note, color, rotation }) {
  await pool.query(
    "INSERT INTO posts (author, note, color, rotation) VALUES ($1, $2, $3, $4)",
    [author, note, color, rotation],
  );
}

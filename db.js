export const posts = [];

export function getPostById(id) {
  return posts.find((post) => post.id === id);
}

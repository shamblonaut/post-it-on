export function calculateFontSize(post) {
  const lines = (post.note.match(/\n/g) || []).length + 1;
  return Math.max(
    Math.min((20 / post.note.length) * 64, 140 / lines, 80),
    16,
  ).toFixed(2);
}

export function calculateFontSize(post) {
  const lines = (post.note.match(/\n/g) || []).length + 1;
  const tokens = post.note.split(/\s+/).filter(Boolean);
  const longestTokenLength = Math.max(
    ...tokens.map((token) => token.length),
    1,
  );

  return Math.max(
    Math.min(640 / longestTokenLength, 180 / tokens.length, 160 / lines, 80),
    16,
  ).toFixed(2);
}

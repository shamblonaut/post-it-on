const testStrings = [
  // Short single words
  "Hi",
  "Test",

  // Medium single words
  "Hello",
  "Testing",

  // Long single words (will test longest token handling)
  "Congratulations",
  "Responsibilities",
  "pneumonoultramicroscopicsilicovolcanoconiosis",
  "antidisestablishmentarianism",

  // Multiple short words
  "Buy milk and eggs",
  "Meeting at 3pm",

  // Multiple lines with varying lengths
  "First line\nSecond line\nThird line",
  "Short\nMedium length line\nAnother short",

  // Long continuous text (no spaces - tests wrapping)
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
  "1234567890123456789012345678901234567890",

  // Mixed content with multiple lines
  "Project Deadline\nFebruary 15th\nHigh Priority",
  "grocery list:\nmilk\nbread\neggs\ncheese",

  // Sentences with normal spacing
  "Remember to call the dentist tomorrow morning",
  "The quick brown fox jumps over the lazy dog",

  // Very long multi-line text
  "This is a very long note that contains multiple sentences and should probably wrap across several lines when displayed in the container",
  "Line one has some text\nLine two has even more text here\nLine three is the longest line in this entire note with many words",

  // Edge cases
  "",
  " ",
  "\n\n\n",
  "Supercalifragilisticexpialidocious\nBut also some normal text",
  "Multiple     spaces     between     words",

  // Normal notes
  "Call Mom",
  "Buy milk",
  "Dentist 2pm",
  "Password: blue2024",
  "Meeting room B",
  "Feed the cat!",
  "Return library books",
  "Pick up dry cleaning",
  "Birthday: March 15th",
  "WiFi: HomeNet5G\nPass: turtle123",
  "Grocery list:\nbread\neggs\nmilk\nbananas",
  "Don't forget keys",
  "Water plants",
  "Call plumber about leak",
  "Team lunch Friday 12:30",
  "Submit report by EOD",
  "Doctor appointment\nThursday 10am\nDr. Smith",
  "Amazon delivery today",
  "Pay electricity bill",
  "Gym at 6am tomorrow",
  "Ideas:\n- Website redesign\n- Newsletter\n- Social media",
  "Conference call 3pm\nDial: 555-0123\nCode: 4567#",
  "Happy Birthday Sarah!\n🎂",
  "Out of office\nBack Monday",
  "Remember:\nFinish presentation\nEmail client\nUpdate spreadsheet",
];

// export const posts = [{ note: "Hello, World!" }];
export const posts = testStrings.map((string) => ({ note: string }));

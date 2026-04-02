import { Client } from "pg";

import { getDatabaseConfiguration } from "./config.js";

const SEED_QUERY = `
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255) NOT NULL,
  note TEXT NOT NULL,
  color VARCHAR(63) DEFAULT 'yellow',
  rotation NUMERIC(3, 2) DEFAULT 0.00 CHECK (rotation >= -5.00 AND rotation <= 5.00),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO posts (author, note, color) VALUES
  ('John Doe', 'Hello, World!', 'green'),
  ('Jane Doe', 'Hi there!', 'blue'),
  ('Anonymous', 'Just do it!', 'yellow');
`;

async function main() {
  console.log("Seeding data...");

  const client = new Client(getDatabaseConfiguration(process.argv[2]));
  await client.connect();
  await client.query(SEED_QUERY);
  await client.end();

  console.log("Seeding completed successfully!");
}

main();

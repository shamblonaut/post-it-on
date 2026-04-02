import { Pool } from "pg";

function createPool() {
  if (process.env.DATABASE_URL) {
    return new Pool({ connectionString: process.env.DATABASE_URL });
  }

  const missing = [
    "DATABASE_USER",
    "DATABASE_PASSWORD",
    "DATABASE_NAME",
  ].filter((variable) => !process.env[variable]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required variable(s) ${missing.join(", ")} in environment`,
    );
  }

  return new Pool({
    host: process.env.DATABASE_HOST ?? "localhost",
    port: process.env.DATABASE_PORT ?? 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
}

export default createPool();

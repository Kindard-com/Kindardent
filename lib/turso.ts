import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN ?? process.env.DATABASE_AUTH_TOKEN;

if (!url || !authToken) {
  console.warn(
    "[turso] Missing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN (or DATABASE_*). Profile API will fail until configured."
  );
}

export const turso = createClient({
  url: url || "file:local.db",
  authToken: authToken || "",
});

// Ensure the user_profiles table exists
export async function initDb() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS user_profiles (
      wallet_address TEXT PRIMARY KEY,
      display_name   TEXT DEFAULT '',
      email          TEXT DEFAULT '',
      avatar_data    TEXT DEFAULT '',
      banner_data    TEXT DEFAULT '',
      updated_at     TEXT DEFAULT ''
    )
  `);
}

import { createClient } from "@libsql/client";

export const turso = createClient({
  url: "libsql://kindardent-kindard.aws-eu-west-1.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODA1Mzk3MzksImlkIjoiMDE5ZTkwNTktM2UwMS03ODQxLTk2M2MtYWM1NmQxMTcxZjkxIiwicmlkIjoiODU4ZjdiNWMtYWJlMS00OWNjLTgxMmQtYjZkMzcyOGI2ZWNiIn0.M-DdifwgspRBfYHGUgUiGkhpC88MhlUDugUTIg1LARCwrLDdtnQ2MVK_5Qha3Q-PkhhbNBOYt-o57wA4y9NMCw",
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

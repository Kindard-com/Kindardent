import { createClient } from "@libsql/client";

const url = process.env.DATABASE_URL ?? process.env.TURSO_DATABASE_URL;
const authToken =
  process.env.DATABASE_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error("Set DATABASE_URL or TURSO_DATABASE_URL");
}

const client = createClient({
  url,
  authToken,
});

async function run() {
  const tables = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table';"
  );
  console.log("Tables:");
  console.dir(tables.rows);

  for (const row of tables.rows) {
    const tableName = row.name as string;
    const count = await client.execute(
      `SELECT count(*) as c FROM ${tableName}`
    );
    console.log(`${tableName}: ${count.rows[0].c} rows`);
  }
}
run().catch(console.error);

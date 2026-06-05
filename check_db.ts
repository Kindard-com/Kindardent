import { createClient } from '@libsql/client';
const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

async function run() {
  const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table';");
  console.log("Tables:");
  console.dir(tables.rows);

  for (const row of tables.rows) {
    const tableName = row.name;
    const count = await client.execute(`SELECT count(*) as c FROM ${tableName}`);
    console.log(`${tableName}: ${count.rows[0].c} rows`);
  }
}
run().catch(console.error);

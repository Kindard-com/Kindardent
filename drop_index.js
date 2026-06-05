import { createClient } from '@libsql/client';

const client = createClient({
  url: 'libsql://kindardent-kindard.aws-eu-west-1.turso.io',
  authToken: process.env.DATABASE_AUTH_TOKEN, // Assuming it's in the environment
});

async function main() {
  try {
    await client.execute('DROP INDEX IF EXISTS payload_locked_documents_rels_order_idx');
    console.log('Index dropped successfully');
  } catch (err) {
    console.error('Error dropping index', err);
  }
}

main();

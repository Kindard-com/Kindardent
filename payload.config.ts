import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import { createProductsCollection, createCartsCollection, createOrdersCollection, createTransactionsCollection } from '@payloadcms/plugin-ecommerce'

import { Subscribers } from './collections/Subscribers'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Navbar } from './globals/Navbar'
import { Footer } from './globals/Footer'
import { HomePage } from './globals/HomePage'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || "https://kindardent.com",
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [
    Navbar,
    Footer,
    HomePage,
  ],
  collections: [
    Pages,
    Media,
    Subscribers,
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        // Additional user fields can go here
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
      authToken: process.env.DATABASE_AUTH_TOKEN || '',
    },
  }),
  plugins: [
    ecommercePlugin({
      access: {
        adminOnlyFieldAccess: () => true,
        adminOrPublishedStatus: () => true,
        isAdmin: () => true,
        isDocumentOwner: () => true,
      },
      customers: {
        slug: 'users',
      },
      products: true,
      carts: true,
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

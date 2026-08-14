import { getPayload } from 'payload'
import config from '../payload.config'

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding.')
    process.exit(1)
  }

  try {
    const payload = await getPayload({ config })

    console.log('Checking for existing admin user...')
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existingUsers.totalDocs === 0) {
      console.log('Creating admin user...')
      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
        },
      })
      console.log('Admin user created successfully.')
    } else {
      console.log('Admin user already exists.')
    }
  } catch (error) {
    console.error('Error seeding admin user:', error)
  }
}

seedAdmin().finally(() => process.exit(0))

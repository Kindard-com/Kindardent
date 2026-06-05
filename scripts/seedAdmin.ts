import { getPayload } from 'payload'
import config from '../payload.config'

async function seedAdmin() {
  try {
    const payload = await getPayload({ config })
    
    console.log('Checking for existing admin user...')
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@id.kindard.com',
        },
      },
    })

    if (existingUsers.totalDocs === 0) {
      console.log('Creating admin user...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@id.kindard.com',
          password: 'MYzAL5fMeUgVlkdx',
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

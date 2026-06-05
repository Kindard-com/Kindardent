import { getPayload } from 'payload'
import config from '../../../payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config })
    
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@id.kindard.com',
        },
      },
    })

    if (existingUsers.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@id.kindard.com',
          password: 'MYzAL5fMeUgVlkdx',
        },
      })
      return NextResponse.json({ message: 'Admin user created successfully.' })
    } else {
      return NextResponse.json({ message: 'Admin user already exists.' })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

import { getPayload } from 'payload'
import config from '../../../payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production." }, { status: 403 });
  }

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    return NextResponse.json(
      { error: 'ADMIN_EMAIL and ADMIN_PASSWORD must be set.' },
      { status: 503 }
    )
  }

  try {
    const payload = await getPayload({ config })

    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existingUsers.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
        },
      })
      return NextResponse.json({ message: 'Admin user created successfully.' })
    } else {
      return NextResponse.json({ message: 'Admin user already exists.' })
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

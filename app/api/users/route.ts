import {NextResponse} from 'next/server'
import {db} from '@/lib/db'

export async function GET() {
  const users = await db.user.findMany({
    where: {
      admin: false,
    },
    select: {
      firstName: true,
      lastName: true,
      id: true,
    },
  })

  return NextResponse.json({
    status: 200,
    data: users,
  })
}

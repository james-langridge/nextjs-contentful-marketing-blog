import {getUserFromCookie} from '@/lib/auth'
import {cookies} from 'next/headers'
import {db} from '@/lib/db'
import {SESSION_STATUS, SESSION_TYPE} from '@prisma/client'
import React from 'react'
import {serialiseDates} from '@/lib/calendar'
import {Calendar} from '@/components/calendar/Calendar'
import {Container} from '@/components/calendar/Container'

export interface SerialisedSession {
  id: string
  ownerId: string
  status: SESSION_STATUS
  name: string
  date: string
  description: string | null
  videoUrl: string | null
  deleted: boolean
  sessionType: SESSION_TYPE
}

const getSessions = async (): Promise<{
  sessions: SerialisedSession[]
  userId: string | undefined
}> => {
  const user = await getUserFromCookie(cookies())

  const sessions = await db.session.findMany({
    where: {
      ownerId: user?.id,
      NOT: {
        deleted: true,
      },
    },
  })

  return {sessions: serialiseDates(sessions), userId: user?.id}
}

export default async function TrainingStudio() {
  const {sessions, userId} = await getSessions()

  return (
    <Container>
      <Calendar initialSessions={sessions} userId={userId} />
    </Container>
  )
}

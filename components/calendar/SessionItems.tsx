import {Session} from '@prisma/client'
import {SerialisedSession} from '@/app/(training-app)/training-studio/page'
import {SessionItem} from '@/components/calendar/SessionItem'
import React from 'react'
import {Day} from '@/lib/calendar'

export function SessionItems({
  sessions,
  day,
}: {
  sessions: (Session | SerialisedSession | undefined)[] | null | undefined
  day: Day
}) {
  if (!sessions) {
    return null
  }

  return (
    <>
      {sessions.map((session, i) => {
        return (
          <div key={day.day * day.year * day.month * i}>
            {session && <SessionItem session={session} />}
          </div>
        )
      })}
    </>
  )
}

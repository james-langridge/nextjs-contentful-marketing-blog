'use client'

import React, {useState} from 'react'
import {CalendarDropdown} from '@/components/calendar/CalendarDropdown'
import {CalendarForm} from '@/components/calendar/CalendarForm'
import {Calendar} from '@/components/calendar/Calendar'
import {Sidebar} from '@/components/calendar/Sidebar'
import {UserName} from '@/components/calendar/UserName'
import {Container} from '@/components/calendar/Container'
import {useUserSessions} from '@/hooks'
import {SerialisedUser} from '@/lib/users'

export default function TrainingPlanner() {
  const [user, setUser] = useState<SerialisedUser>()
  const [sessionId, setSessionId] = useState('')
  const {sessions, getUserSessions} = useUserSessions(user)

  return (
    <Container>
      <Sidebar>
        <UserName firstName={user?.firstName} lastName={user?.lastName} />
        <CalendarDropdown setUser={setUser} />
        <CalendarForm
          userId={user?.id}
          sessionId={sessionId}
          getUserSessions={getUserSessions}
        />
      </Sidebar>
      <Calendar sessions={sessions} setSessionId={setSessionId} isAdmin />
    </Container>
  )
}

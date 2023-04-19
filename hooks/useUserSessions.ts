import {useCallback, useEffect, useState} from 'react'
import {fetchSessions, User} from '@/lib/api'
import {Session} from '@prisma/client'

export function useUserSessions(user?: User) {
  const [sessions, setSessions] = useState<Session[]>()

  const getUserSessions = useCallback(async () => {
    if (user) {
      const sessions = await fetchSessions(user.id)

      setSessions(sessions)
    }
  }, [user])

  useEffect(() => {
    void getUserSessions()
  }, [getUserSessions, user])

  return {sessions, getUserSessions}
}

import {useState, useCallback, useEffect} from 'react'
import {SESSION_STATUS} from '.prisma/client'
import {SerialisedSession} from '@/app/(training-app)/training-studio/page'
import {Session} from '@prisma/client'
import {updateSession} from '@/lib/api'
import {useQueryClient} from '@tanstack/react-query'

export function useSessionStatus(session: Session | SerialisedSession) {
  const [status, setStatus] = useState(session.status)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const queryClient = useQueryClient()

  const updateStatus = useCallback(async () => {
    await updateSession({
      sessionId: session.id,
      status: status,
    }).then(() => queryClient.invalidateQueries({queryKey: ['users']}))
  }, [queryClient, session.id, status])

  useEffect(() => {
    // Added this check to avoid making PUT reqs when the checkbox is checked on the first render
    if (isFirstRender) {
      setIsFirstRender(false)

      return
    }

    void updateStatus()
  }, [status, updateStatus])

  function toggleStatus() {
    if (status === SESSION_STATUS.NOT_STARTED) {
      setStatus(SESSION_STATUS.COMPLETED)
    } else {
      setStatus(SESSION_STATUS.NOT_STARTED)
    }
  }

  return {status, toggleStatus}
}

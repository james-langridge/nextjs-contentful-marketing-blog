import {Session} from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default function SessionItem({
  session,
  isAdmin,
  setSessionId,
}: {
  session?: Session
  isAdmin: boolean
  setSessionId?: React.Dispatch<React.SetStateAction<string>>
}) {
  function onClick(event: React.MouseEvent | React.KeyboardEvent) {
    event.stopPropagation()

    if (!isAdmin || !setSessionId) {
      return
    }

    const sessionId = (event.target as HTMLElement).id

    setSessionId(sessionId)
  }

  return (
    <>
      {isAdmin && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={onClick}
          onClick={onClick}
          className="mb-1 w-full rounded bg-emerald-400 font-bold text-white"
          id={session?.id}
        >
          {session?.name}
        </div>
      )}

      {!isAdmin && (
        <Link
          href={`/session/${session?.id}`}
          className="mb-1 w-full rounded bg-emerald-400 font-bold text-white"
        >
          {session?.name}
        </Link>
      )}
    </>
  )
}
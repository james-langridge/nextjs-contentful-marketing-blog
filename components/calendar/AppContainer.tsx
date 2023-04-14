'use client'

import React, {useEffect} from 'react'
import {useCalendarData, useMediaQuery} from '@/hooks'
import {
  Calendar,
  CalendarDays,
  CalendarEmptyDays,
  CalendarGrid,
  CalendarHeading,
  CalendarMobile,
} from '@/components/calendar'
import {SessionSerialisedDate} from '@/app/(training-app)/training-studio/page'

export function AppContainer({sessions}: {sessions: SessionSerialisedDate[]}) {
  const {
    calendarSquares,
    emptyDays,
    monthData,
    year,
    month,
    setYear,
    setMonth,
  } = useCalendarData()
  const isMobile = useMediaQuery('(max-width: 639px)')

  useEffect(() => {
    // Lock scroll for large screens
    if (!isMobile) document.body.style.overflow = 'hidden'
    if (isMobile) document.body.style.overflow = 'visible'
  }, [isMobile])

  return (
    <div className="flex h-[90vh]">
      <Calendar>
        {isMobile && <CalendarMobile sessions={sessions} />}

        {!isMobile && (
          <>
            <CalendarHeading
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
            />
            <CalendarGrid calendarSquares={calendarSquares}>
              <CalendarEmptyDays emptyDays={emptyDays} />
              <CalendarDays monthData={monthData} sessions={sessions} />
            </CalendarGrid>
          </>
        )}
      </Calendar>
    </div>
  )
}

import { useState } from 'react'
import { useContextGlobal } from '../context/ContextGlobal'
import { ITimeRanges, ITimeVerfier } from '../interfaces'
import moment from 'moment'

export const useTimeVerifier = (): ITimeVerfier => {
  const [error, setError] = useState<null | string>(null)
  const contextGlobal = useContextGlobal()
  const [timeToCheck, setTimeToCheck] = useState<Date | null>(new Date())
  const { timeRanges, setTimesToVerify } = contextGlobal

  const addTimeVerified = (): void => {
    setError(null)
    if (!moment(timeToCheck).isValid()) {
      setError('Need to add a Time')
      return
    }
    let withInRange = false
    timeRanges.forEach((timeRange: ITimeRanges) => {
      const { initialTime, endingTime } = timeRange
      if (
        moment(timeToCheck).isBetween(initialTime, endingTime) ||
        moment(timeToCheck).isSame(initialTime)
      ) {
        withInRange = true
      }
    })
    setTimesToVerify((prevState) => [
      ...prevState,
      { time: timeToCheck, withInRange }
    ])
    setTimeToCheck(null)
  }

  return {
    timeToCheck,
    timeRanges,
    setTimeToCheck,
    addTimeVerified,
    error
  }
}

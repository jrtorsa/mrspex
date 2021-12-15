import React from 'react'
import { ITimeRanges, ITimesRangeProps } from '../interfaces'
import moment from 'moment'
import { Box, Button } from '@material-ui/core'
import { useContextGlobal } from '../context/ContextGlobal'

const TimeRanges: React.FC<ITimesRangeProps> = ({
  timeRanges,
  removableButton = false,
}) => {
  const contextGlobal = useContextGlobal()
  const { setTimeRanges } = contextGlobal
  const removeTime = (idx: number): void => {
    const filterTime = timeRanges.filter((range, index) => index !== idx)
    setTimeRanges(filterTime)
  }
  return (
    <div>
      <Box>Time Ranges</Box>
      {timeRanges.map((time: ITimeRanges, index: number) => {
        const { initialTime, endingTime } = time
        return (
          <Box key={index}>
            {moment(initialTime).format('HH:mm:ss').toString()} -{' '}
            {moment(endingTime).format('HH:mm:ss').toString()}{' '}
            {Boolean(removableButton) && (
              <Button variant="contained" onClick={() => removeTime(index)}>
                -
              </Button>
            )}
          </Box>
        )
      })}
    </div>
  )
}

export default TimeRanges

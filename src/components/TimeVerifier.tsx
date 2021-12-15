import React from 'react'
import { ITimeCheck, ITimesVerifierProps } from '../interfaces'
import moment from 'moment'
import { Box, Button } from '@material-ui/core'
import { useContextGlobal } from '../context/ContextGlobal'

const TimeVerifier: React.FC<ITimesVerifierProps> = ({ timesToVerify }) => {
  const contextGlobal = useContextGlobal()
  const { setTimesToVerify } = contextGlobal
  const removeTime = (idx: number): void => {
    const filterTime = timesToVerify.filter((range, index) => index !== idx)
    setTimesToVerify(filterTime)
  }

  return (
    <div>
      {timesToVerify.map((time: ITimeCheck, index: number) => (
        <div key={index}>
          <Box>{moment(time.time).format('HH:mm:ss').toString()}</Box>
          <Box>{time.withInRange ? '✅' : '🚨'}</Box>
          <Button variant="contained" onClick={() => removeTime(index)}>
            -
          </Button>
        </div>
      ))}
    </div>
  )
}

export default TimeVerifier

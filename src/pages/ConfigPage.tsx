import { useState } from 'react'
import { useContextGlobal } from '../context/ContextGlobal'
import { Button } from '@material-ui/core'
import moment from 'moment'
import Picker from '../components/Picker'
import TimeRanges from '../components/TimeRanges'
import Error from '../components/Error'
import '../styles/ConfigPage.css'

function ConfigPage(): JSX.Element {
  const [initialTime, setInitialTime] = useState<Date | null>(new Date())
  const [endingTime, setEndingTime] = useState<Date | null>(new Date())
  const [error, setError] = useState<null | string>(null)
  const contextGlobal = useContextGlobal()

  const { timeRanges, setTimeRanges } = contextGlobal

  const addTime = (): void => {
    setError(null)
    if (!moment(initialTime).isValid() || !moment(endingTime).isValid()) {
      setError('Need to add a Time')
      return
    }
    if (moment(endingTime).isSameOrBefore(initialTime)) {
      setError('Ending time should be greater than start time')
      return
    }
    setTimeRanges((prevState) => [...prevState, { initialTime, endingTime }])
    setInitialTime(null)
    setEndingTime(null)
  }

  return (
    <div className="config-page-container">
      <div className="config-page-picker">
        <div id="init-timer">
          <Picker
            label="Initial Time"
            timeToCheck={initialTime}
            setTimeToCheck={setInitialTime}
          />
        </div>
        <div id="end-timer">
          <Picker
            label="Ending Time"
            timeToCheck={endingTime}
            setTimeToCheck={setEndingTime}
          />
        </div>
        <div>
          <Button variant="contained" onClick={addTime}>
            +
          </Button>
        </div>
        <div>
          <Error error={error} />
        </div>
      </div>
      <div className="config-page-time-ranges">
        <TimeRanges timeRanges={timeRanges} removableButton />
      </div>
    </div>
  )
}

export default ConfigPage

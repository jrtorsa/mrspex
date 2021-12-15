import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { IPicker } from '../interfaces'
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

const Picker: React.FC<IPicker> = ({ label, setTimeToCheck, timeToCheck }) => {
  const handleChange = (date: Date | null): void => {
    setTimeToCheck(date)
  }
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          value={timeToCheck}
          onChange={handleChange}
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes', 'seconds']}
          format="HH:mm:ss"
          label={label}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default Picker

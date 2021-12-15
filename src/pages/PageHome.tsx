import { useContextGlobal } from '../context/ContextGlobal'
import { useTimeVerifier } from '../hooks/useTimeVerifier'
import { Button } from '@material-ui/core'
import Picker from '../components/Picker'
import TimeRanges from '../components/TimeRanges'
import TimeVerifier from '../components/TimeVerifier'
import Error from '../components/Error'
import '../styles/PageHome.css'

function PageHome (): JSX.Element {
  const globalContext = useContextGlobal()
  const { timesToVerify } = globalContext

  const { setTimeToCheck, timeRanges, addTimeVerified, timeToCheck, error } =
    useTimeVerifier()

  return (
    <div className='page-home-container'>
      <div className='page-home-picker'>
        <div>
          <Picker
            label='Time Range Verifier'
            timeToCheck={timeToCheck}
            setTimeToCheck={setTimeToCheck}
          />
        </div>
        <div>
          <Button variant='contained' onClick={addTimeVerified}>
            +
          </Button>
        </div>
        <div>
          <TimeVerifier timesToVerify={timesToVerify} />
        </div>
        <div>
          <Error error={error} />
        </div>
      </div>
      <div className='page-home-time-range'>
        <TimeRanges timeRanges={timeRanges} />
      </div>
    </div>
  )
}

export default PageHome

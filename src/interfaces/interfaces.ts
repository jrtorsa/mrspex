export interface IContextGlobal {
  timesToVerify: ITimeCheck[], timeRanges: ITimeRanges[], setTimesToVerify: React.Dispatch<React.SetStateAction<ITimeCheck[]>>, setTimeRanges: React.Dispatch<React.SetStateAction<ITimeRanges[]>>
}

export interface ITimeRanges {
  initialTime: Date | null, endingTime: Date | null
}

export interface ITimeCheck {
  time: Date | null, withInRange: boolean
}

export interface IPicker {
  label: string, setTimeToCheck: (date: Date | null) => void , timeToCheck: Date | null
}

export interface ITimeVerfier extends IError{
  timeToCheck: Date | null, timeRanges: ITimeRanges[], setTimeToCheck: React.Dispatch<React.SetStateAction<Date | null>>, addTimeVerified: () => void,
}

export interface ITimesRangeProps {
  timeRanges: ITimeRanges[]
  removableButton?: boolean
}

export interface ITimesVerifierProps {
  timesToVerify: ITimeCheck[]
}

export interface IError {
  error: string | null
}
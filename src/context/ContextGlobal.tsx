import { useState, useContext, createContext } from 'react'
import { IContextGlobal, ITimeCheck, ITimeRanges } from '../interfaces'

const ContextGlobalProvider = createContext<IContextGlobal | undefined>(
  undefined
)

export const useContextGlobal = (): IContextGlobal => {
  const context: IContextGlobal | undefined = useContext(ContextGlobalProvider)
  if (context === undefined) throw Error('ContextGlobal is not right')
  return context
}

const ContextGlobal = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [timesToVerify, setTimesToVerify] = useState<ITimeCheck[]>([])
  const [timeRanges, setTimeRanges] = useState<ITimeRanges[]>([])

  return (
    <ContextGlobalProvider.Provider
      value={{
        timesToVerify,
        setTimesToVerify,
        timeRanges,
        setTimeRanges
      }}
    >
      {children}
    </ContextGlobalProvider.Provider>
  )
}

export default ContextGlobal

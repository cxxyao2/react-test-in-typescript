// NameContext, NameProvider, NameConsumer
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

type NameContextType = {
  name: string
  setName: Dispatch<SetStateAction<string>>
}

type NameProviderProps = {
  children: ReactNode[] | ReactNode
}

export const NameContext = createContext({} as NameContextType)

export function useNameContext() {
  return useContext(NameContext)
}

export function NameProvider({ children }: NameProviderProps) {
  const [name, setName] = useState('unknown')
  return (
    <NameContext.Provider
      value={{
        name,
        setName
      }}>
      {children}
    </NameContext.Provider>
  )
}

export function NameConsumer() {
  return (
    <NameContext.Consumer>
      {({ name, setName }) => (
        <div>
          <p data-testid='currentName'>Your name: {name}</p>
          <button onClick={() => setName('Mike')}>change</button>
        </div>
      )}
    </NameContext.Consumer>
  )
}

//React
import { createContext, useContext, useMemo, useReducer } from 'react'
//Interfaces
import { IRegisterCredentials, IUserValidation } from '@interfaces'
//Contasts
import { DEFAULTS } from '../constants'

export enum ERegisterReducerActionKind {
  SET_DATA = 'SET_DATA',
  SET_VALIDATION = 'SET_VALIDATION',
  PREV = 'PREV',
  NEXT = 'NEXT',
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
}

interface IReducerAction {
  type: ERegisterReducerActionKind
  payload?: IRegisterCredentials | IUserValidation
}

export interface IRegisterState {
  data: IRegisterCredentials
  step: number
  validation: IUserValidation
}

interface IRegisterApi {
  setData: (data: IRegisterCredentials) => void

  changeStep: (type: ERegisterReducerActionKind.NEXT | ERegisterReducerActionKind.PREV) => void
  reset: () => void
}

const initialApi: IRegisterApi = {
  setData: () => { },

  changeStep: () => { },
  reset: () => { },
}

const RegisterStateContext = createContext(DEFAULTS.initialRegisterState)
const RegisterApiContext = createContext(initialApi)

const useRegisterStateContext = () => {
  const ctx = useContext(RegisterStateContext)

  if (!ctx) {
    throw new Error('useRegisterStateContext must be used within a RegisterStateContextProvider')
  }

  return ctx
}

const useRegisterApiContext = () => {
  const ctx = useContext(RegisterApiContext)

  if (!ctx) {
    throw new Error('useRegisterApiContext must be used within a RegisterApiContextProvider')
  }

  return ctx
}

const reducer = (state: IRegisterState, action: IReducerAction): IRegisterState => {
  const { type, payload } = action
  switch (type) {
    case ERegisterReducerActionKind.PREV: {
      return {
        ...state,
        step: state.step - 1,
      }
    }
    case ERegisterReducerActionKind.NEXT:
      return {
        ...state,
        step: state.step + 1,
      }
    case ERegisterReducerActionKind.SET_DATA:
      return {
        ...state,
        data: payload as IRegisterCredentials,
      }

    case ERegisterReducerActionKind.RESET:
      return DEFAULTS.initialRegisterState

    default:
      throw new Error(`Unknown action type ${type}`)
  }
}

interface IProps {
  children: React.ReactNode
}

const RegisterContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULTS.initialRegisterState)

  const registerApi = useMemo<IRegisterApi>(() => {
    return {
      changeStep: (type: ERegisterReducerActionKind.NEXT | ERegisterReducerActionKind.PREV) =>
        dispatch({ type: type }),
      setData: (data: IRegisterCredentials) =>
        dispatch({ type: ERegisterReducerActionKind.SET_DATA, payload: data }),

      reset: () => dispatch({ type: ERegisterReducerActionKind.RESET }),
    }
  }, [dispatch])

  return (
    <RegisterStateContext.Provider value={state}>
      <RegisterApiContext.Provider value={registerApi}>{children}</RegisterApiContext.Provider>
    </RegisterStateContext.Provider>
  )
}

export { useRegisterStateContext, useRegisterApiContext, RegisterContextProvider }

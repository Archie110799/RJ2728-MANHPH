import { IAction } from '../interfaces/common'
import Types from '../type'

interface ICommonReducerInitSate {
  loading: boolean
  error?: object | undefined | null
}
const initState: ICommonReducerInitSate = {
  loading: false,
  error: null,
}

const commonReducer = (
  state: ICommonReducerInitSate = initState,
  action: IAction
): ICommonReducerInitSate => {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return {
        ...state,
        loading: action.payload,
      }
    case Types.FETCH_REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export { commonReducer }

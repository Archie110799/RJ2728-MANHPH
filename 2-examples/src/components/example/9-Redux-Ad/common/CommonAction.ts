import { IAction } from '../interfaces/common'
import Types from '../type'

export const callApi = (loading = true): IAction => ({
  type: Types.FETCH_REQUEST,
  payload: loading,
})

export const callApiFinish = (error?: object): IAction => ({
  type: Types.FETCH_REQUEST_FINISHED,
  payload: error,
})

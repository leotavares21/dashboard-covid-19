import * as Types from '../types'

export const fetchChartPieBRRequest = () => {
  return {
    type: Types.FETCH_CHART_PIE_BR_REQUEST,
  }
}

export const fetchChartPieBRSuccess = data => {
  return {
    type: Types.FETCH_CHART_PIE_BR_SUCCESS,
    payload: data,
  }
}

export const fetchChartPieBRFailure = error => {
  return {
    type: Types.FETCH_CHART_PIE_BR_FAILURE,
    payload: error,
  }
}

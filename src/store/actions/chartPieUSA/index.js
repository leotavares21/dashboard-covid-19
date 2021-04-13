import * as Types from '../types'

export const fetchChartPieUSARequest = () => {
  return {
    type: Types.FETCH_CHART_PIE_USA_REQUEST,
  }
}

export const fetchChartPieUSASuccess = data => {
  return {
    type: Types.FETCH_CHART_PIE_USA_SUCCESS,
    payload: data,
  }
}

export const fetchChartPieUSAFailure = error => {
  return {
    type: Types.FETCH_CHART_PIE_USA_FAILURE,
    payload: error,
  }
}

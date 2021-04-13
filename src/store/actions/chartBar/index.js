import * as Types from '../types'

export const fetchChartBarRequest = () => {
  return {
    type: Types.FETCH_CHART_BAR_REQUEST,
  }
}

export const fetchChartBarSuccess = data => {
  return {
    type: Types.FETCH_CHART_BAR_SUCCESS,
    payload: data,
  }
}

export const fetchChartBarFailure = error => {
  return {
    type: Types.FETCH_CHART_BAR_FAILURE,
    payload: error,
  }
}

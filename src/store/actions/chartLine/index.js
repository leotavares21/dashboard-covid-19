import * as Types from '../types'

export const fetchChartLineRequest = () => {
  return {
    type: Types.FETCH_CHART_LINE_REQUEST,
  }
}

export const fetchChartLineSuccess = data => {
  return {
    type: Types.FETCH_CHART_LINE_SUCCESS,
    payload: data,
  }
}

export const fetchChartLineFailure = error => {
  return {
    type: Types.FETCH_CHART_LINE_FAILURE,
    payload: error,
  }
}

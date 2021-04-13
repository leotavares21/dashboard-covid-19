import * as Types from '../types'

export const fetchChartChoroplethRequest = () => {
  return {
    type: Types.FETCH_CHART_CHOROPLETH_REQUEST,
  }
}

export const fetchChartChoroplethSuccess = data => {
  return {
    type: Types.FETCH_CHART_CHOROPLETH_SUCCESS,
    payload: data,
  }
}

export const fetchChartChoroplethFailure = error => {
  return {
    type: Types.FETCH_CHART_CHOROPLETH_FAILURE,
    payload: error,
  }
}

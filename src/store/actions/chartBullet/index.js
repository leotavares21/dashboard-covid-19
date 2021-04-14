import * as Types from '../types'

export const fetchChartBulletRequest = () => {
  return {
    type: Types.FETCH_CHART_BULLET_REQUEST,
  }
}

export const fetchChartBulletSuccess = data => {
  return {
    type: Types.FETCH_CHART_BULLET_SUCCESS,
    payload: data,
  }
}

export const fetchChartBulletFailure = error => {
  return {
    type: Types.FETCH_CHART_BULLET_FAILURE,
    payload: error,
  }
}

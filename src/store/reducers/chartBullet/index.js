import * as Types from '../../actions/types'

const initialState = {
  data: [],
  error: '',
}

const chartBulletReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CHART_BULLET_REQUEST:
      return {
        ...state,
        error: '',
      }
    case Types.FETCH_CHART_BULLET_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case Types.FETCH_CHART_BULLET_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default chartBulletReducer

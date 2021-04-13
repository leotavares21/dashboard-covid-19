import * as Types from '../../actions/types'

const initialState = {
  data: [],
  error: '',
}

const chartLineReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CHART_LINE_REQUEST:
      return {
        ...state,
        error: '',
      }
    case Types.FETCH_CHART_LINE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case Types.FETCH_CHART_LINE_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default chartLineReducer

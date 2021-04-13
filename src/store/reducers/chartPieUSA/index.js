import * as Types from '../../actions/types'

const initialState = {
  data: [],
  error: '',
}

const chartPieUSAReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CHART_PIE_USA_REQUEST:
      return {
        ...state,
        error: '',
      }
    case Types.FETCH_CHART_PIE_USA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case Types.FETCH_CHART_PIE_USA_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default chartPieUSAReducer

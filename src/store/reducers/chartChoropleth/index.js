import * as Types from '../../actions/types'

const initialState = {
  data: [],
  features: [],
  error: '',
}

const chartChoroplethReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CHART_CHOROPLETH_REQUEST:
      return {
        ...state,
        error: '',
      }
    case Types.FETCH_CHART_CHOROPLETH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        features: action.features,
      }
    case Types.FETCH_CHART_CHOROPLETH_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default chartChoroplethReducer

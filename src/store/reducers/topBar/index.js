import { HYDRATE } from 'next-redux-wrapper'
import * as Types from '../../actions/types'

const initialState = {
  open: false,
  navIndex: null,
  theme: null,
}

const topbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, open: !state.open }
    case Types.OPEN_SIDEBAR:
      return {
        ...state,
        open: !state.open,
      }
    case Types.OPEN_NAVBAR_IN_TOPBAR:
      return {
        ...state,
        navIndex: action.navIndex,
      }
    case Types.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}

export default topbarReducer

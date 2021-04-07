import * as Types from '../types'

export const openSideBar = () => {
  return {
    type: Types.OPEN_SIDEBAR,
  }
}

export const openNavInTopBar = navIndex => {
  return {
    type: Types.OPEN_NAVBAR_IN_TOPBAR,
    navIndex,
  }
}

export const changeTheme = theme => {
  return {
    type: Types.CHANGE_THEME,
    theme
  }
}


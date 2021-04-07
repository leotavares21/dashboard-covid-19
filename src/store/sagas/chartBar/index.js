import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as Types from '../../actions/types'

function* fetchChartBar(){
  try {

  } catch (err) {

  }
}

export function* watchFetchChartBar(){
  yield takeLatest(Types.FETCH_CHART_BAR, fetchChartBar)
}
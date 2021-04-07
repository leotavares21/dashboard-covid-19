import { all } from 'redux-saga/effects'

import { watchFetchChartBar } from './chartBar'

function* rootSaga(){
  yield all([
    watchFetchChartBar(),
  ])
}

export default rootSaga
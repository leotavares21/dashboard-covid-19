import { all } from 'redux-saga/effects'

import { watchFetchChartPieBR } from './chartPieBR'
import { watchFetchChartPieUSA } from './chartPieUSA'
import { watchFetchChartLine } from './chartLine'
import { watchFetchChartChoropleth } from './chartChoropleth'
import { watchFetchChartBar } from './chartBar'

function* rootSaga() {
  yield all([
    watchFetchChartPieBR(),
    watchFetchChartPieUSA(),
    watchFetchChartLine(),
    watchFetchChartChoropleth(),
    watchFetchChartBar(),
  ])
}

export default rootSaga

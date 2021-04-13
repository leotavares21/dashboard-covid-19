import { call, put, takeLatest } from 'redux-saga/effects'
import * as ChartChoroplethActions from '../../actions/chartChoropleth'
import * as Types from '../../actions/types'
import { api2 } from '../../../services/api'

function* getChartChoropleth() {
  try {
    const resBR = yield call(api2.get, 'api/npm-covid-data/')

    const covidData = []

    resBR.data.map(data => {
      if(data.ThreeLetterSymbol !== null || undefined){
        covidData.push(
          {
            "id": data.ThreeLetterSymbol.toUpperCase(),
            "value": data.TotCases_1M_Pop
          },
        )
      }
    })

    yield put(ChartChoroplethActions.fetchChartChoroplethSuccess(covidData))
  } catch (err) {
    yield put(ChartChoroplethActions.fetchChartChoroplethFailure(err.message))
  }
}

export function* watchFetchChartChoropleth() {
  yield takeLatest(Types.FETCH_CHART_LINE_REQUEST, getChartChoropleth)
}

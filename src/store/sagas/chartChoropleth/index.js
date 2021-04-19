import { call, all, put, takeLatest } from 'redux-saga/effects'
import * as ChartChoroplethActions from '../../actions/chartChoropleth'
import * as Types from '../../actions/types'
import { api2 } from '../../../services/api'
import * as d3 from 'd3'

function* getChartChoropleth() {
  try {
    const [res, data] = yield all([
      call(api2.get, 'api/npm-covid-data/'),
      call(
        d3.json,
        'https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json'
      ),
    ])

    const covidData = []

    res.data.map(data => {
      if (data.ThreeLetterSymbol !== null || undefined) {
        covidData.push({
          id: data.ThreeLetterSymbol.toUpperCase(),
          value: data.TotCases_1M_Pop,
        })
      }
    })

    yield put(ChartChoroplethActions.fetchChartChoroplethSuccess(covidData, data.features))
  } catch (err) {
    yield put(ChartChoroplethActions.fetchChartChoroplethFailure(err.message))
  }
}

export function* watchFetchChartChoropleth() {
  yield takeLatest(Types.FETCH_CHART_LINE_REQUEST, getChartChoropleth)
}

import { call, put, takeLatest } from '@redux-saga/core/effects'
import * as Types from '../../actions/types'
import * as ChartBarActions from '../../actions/chartBar'
import { api2 } from '../../../services/api'

function* fetchChartBar() {
  try {
    const res = yield call(api2.get, 'api/api-covid-data/reports/BRA')

    const covidData = []

    res.data.reduce((allData, data) => {
      switch (data.province) {
        case 'Amazonas':
        case 'Sao Paulo':
        case 'Bahia':
        case 'Rio de Janeiro':
        case 'Parana':
        case 'Minas Gerais':
          covidData.push({
            estados: data.TwoLetterSymbol,
            ativos: data.active,
            confirmados: data.confirmed,
            curados: data.recovered,
          })
          break
        default:
          return
      }
    })

    yield put(ChartBarActions.fetchChartBarSuccess(covidData))
  } catch (err) {
    yield put(ChartBarActions.fetchChartBarFailure(err.message))
  }
}

export function* watchFetchChartBar() {
  yield takeLatest(Types.FETCH_CHART_BAR_REQUEST, fetchChartBar)
}

import { call, put, takeLatest } from '@redux-saga/core/effects'
import * as Types from '../../actions/types'
import * as ChartBarActions from '../../actions/chartBar'
import { api2 } from '../../../services/api'

function* fetchChartBar() {
  try {
    const res = yield call(api2.get, 'api/api-covid-data/reports/BRA')

    const covidData = []

    function dataFilter(data) {
      return (
        data.province === 'Amazonas' ||
        data.province === 'Sao Paulo' ||
        data.province === 'Bahia' ||
        data.province === 'Rio de Janeiro' ||
        data.province === 'Parana' ||
        data.province === 'Minas Gerais'
      )
    }

    const data = res.data.filter(dataFilter)

    data.map(data => {
      covidData.push({
        estados: data.TwoLetterSymbol,
        ativos: data.active,
        confirmados: data.confirmed,
        curados: data.recovered,
      })
    })

    yield put(ChartBarActions.fetchChartBarSuccess(covidData))
  } catch (err) {
    yield put(ChartBarActions.fetchChartBarFailure(err.message))
  }
}

export function* watchFetchChartBar() {
  yield takeLatest(Types.FETCH_CHART_BAR_REQUEST, fetchChartBar)
}

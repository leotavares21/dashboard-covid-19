import { call, put, takeLatest } from '@redux-saga/core/effects'
import * as Types from '../../actions/types'
import * as ChartBulletActions from '../../actions/chartBullet'
import { api2 } from '../../../services/api'

function* fetchChartBullet() {
  try {
    const res = yield call(api2.get, 'api/npm-covid-data/countries')

    const covidData = []

    function dataFilter(data) {
      return (
        data.Country === 'USA' ||
        data.Country === 'Brazil' ||
        data.Country === 'France' ||
        data.Country === 'Argentina' ||
        data.Country === 'India' ||
        data.Country === 'Russia'
      )
    }

    const data = res.data.filter(dataFilter)

    data.map(data => {
      covidData.push({
        países: data.Country,
        infecção: data.Infection_Risk,
        fatalidade: data.Case_Fatality_Rate,
      })
    })

    yield put(ChartBulletActions.fetchChartBulletSuccess(covidData))
  } catch (err) {
    yield put(ChartBulletActions.fetchChartBulletFailure(err.message))
  }
}

export function* watchFetchChartBullet() {
  yield takeLatest(Types.FETCH_CHART_BAR_REQUEST, fetchChartBullet)
}

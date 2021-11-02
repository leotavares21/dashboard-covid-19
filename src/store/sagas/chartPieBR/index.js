import { call, put, takeLatest } from 'redux-saga/effects'
import * as ChartPieBRActions from '../../actions/chartPieBR'
import * as Types from '../../actions/types'
import { api1 } from '../../../services/api'

function* getChartPieBR() {
  try {
    const res = yield call(api1.get, 'statistics', {
      params: { country: 'brazil' },
    })

    const cases = res.data.response[0].cases

    const data = [
      {
        id: 'ativos',
        label: 'ativos',
        value: cases.active,
      },
      {
        id: 'recuperados',
        label: 'recuperados',
        value: cases.recovered,
      },
      {
        id: 'total',
        label: 'total',
        value: cases.total,
      },
    ]

    yield put(ChartPieBRActions.fetchChartPieBRSuccess(data))
  } catch (err) {
    yield put(ChartPieBRActions.fetchChartPieBRFailure(err.message))
  }
}

export function* watchFetchChartPieBR() {
  yield takeLatest(Types.FETCH_CHART_PIE_BR_REQUEST, getChartPieBR)
}

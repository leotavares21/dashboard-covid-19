import { call, put, takeLatest } from 'redux-saga/effects'
import * as ChartPieUSAActions from '../../actions/chartPieUSA'
import * as Types from '../../actions/types'
import { api1 } from '../../../services/api'

function* getChartPieUSA() {
  try {
    const res = yield call(api1.get, 'statistics', {
      params: { country: 'usa' },
    })
    const cases = res.data.response[0].cases

    const data = [
      {
        id: 'ativos',
        label: 'ativos',
        value: cases.active,
      },
      {
        id: 'curados',
        label: 'curados',
        value: cases.recovered,
      },
      {
        id: 'total',
        label: 'total',
        value: cases.total,
      },
    ]

    yield put(ChartPieUSAActions.fetchChartPieUSASuccess(data))
  } catch (err) {
    yield put(ChartPieUSAActions.fetchChartPieUSAFailure(err.message))
  }
}

export function* watchFetchChartPieUSA() {
  yield takeLatest(Types.FETCH_CHART_PIE_USA_REQUEST, getChartPieUSA)
}

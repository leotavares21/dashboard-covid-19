import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as ChartLineActions from '../../actions/chartLine'
import * as Types from '../../actions/types'
import { api2 } from '../../../services/api'

function* getChartLine() {
  try {
    const [resBR, resUSA, resMEX] = yield all([
      call(api2.get, 'api/covid-ovid-data/sixmonth/BRA'),
      call(api2.get, 'api/covid-ovid-data/sixmonth/USA'),
      call(api2.get, 'api/covid-ovid-data/sixmonth/MEX'),
    ])

    const covidData = [
      {
        id: 'Mexico',
        data: [],
      },
      {
        id: 'USA',
        data: [],
      },
      {
        id: 'Brasil',
        data: [],
      },
    ]

    resMEX.data.reduce((allData, data, i) => {
      if (i < 15) {
        covidData[0].data.unshift({
          x: data.date,
          y: data.new_deaths,
        })
      }
    })

    resUSA.data.reduce((allData, data, i) => {
      if (i < 15) {
        covidData[1].data.unshift({
          x: data.date,
          y: data.new_deaths,
        })
      }
    })

    resBR.data.reduce((allData, data, i) => {
      if (i < 15) {
        covidData[2].data.unshift({
          x: data.date,
          y: data.new_deaths,
        })
      }
    })

    yield put(ChartLineActions.fetchChartLineSuccess(covidData))
  } catch (err) {
    yield put(ChartLineActions.fetchChartLineFailure(err.message))
  }
}

export function* watchFetchChartLine() {
  yield takeLatest(Types.FETCH_CHART_LINE_REQUEST, getChartLine)
}

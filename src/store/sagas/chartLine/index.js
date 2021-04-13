import { call, put, takeLatest } from 'redux-saga/effects'
import * as ChartLineActions from '../../actions/chartLine'
import * as Types from '../../actions/types'
import { api2 } from '../../../services/api'

function* getChartLine() {
  try {
    const resBR = yield call(api2.get, 'api/covid-ovid-data/sixmonth/BRA')
    const resUSA = yield call(api2.get, 'api/covid-ovid-data/sixmonth/USA')
    const resMEX = yield call(api2.get, 'api/covid-ovid-data/sixmonth/MEX')

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

    function just14days(data, i) {
      return i < 14
    }

    const filterBR = resBR.data.filter(just14days)
    const filterUSA = resUSA.data.filter(just14days)
    const filterMEX = resMEX.data.filter(just14days)

    filterMEX.map(data => {
      covidData[0].data.unshift({
        x: data.date.slice(-5),
        y: data.new_deaths,
      })
    })


    filterUSA.map(data => {
      covidData[1].data.unshift({
        x: data.date.slice(-5),
        y: data.new_deaths,
      })
    })


    filterBR.map(data => {
      covidData[2].data.unshift({
        x: data.date.slice(-5),
        y: data.new_deaths,
      })
    })

    yield put(ChartLineActions.fetchChartLineSuccess(covidData))
  } catch (err) {
    yield put(ChartLineActions.fetchChartLineFailure(err.message))
  }
}

export function* watchFetchChartLine() {
  yield takeLatest(Types.FETCH_CHART_LINE_REQUEST, getChartLine)
}

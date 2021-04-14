import { combineReducers } from 'redux'
import topbarReducer from './topBar'
import chartPieBRReducer from './chartPieBR'
import chartPieUSAReducer from './chartPieUSA'
import chartLineReducer from './chartLine'
import chartChoroplethReducer from './chartChoropleth'
import chartBarReducer from './chartBar'
import chartBulletReducer from './chartBullet'

export default combineReducers({
  topbarReducer,
  chartPieBRReducer,
  chartPieUSAReducer,
  chartLineReducer,
  chartChoroplethReducer,
  chartBarReducer,
  chartBulletReducer,
})

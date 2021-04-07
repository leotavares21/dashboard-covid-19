import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers'
import rootSaga from './sagas'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducers,
    composeWithDevTools(),
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}

const storeWrapper = createWrapper(makeStore, { debug: false })

export default storeWrapper

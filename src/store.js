import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'

export default createStore(
  noteReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

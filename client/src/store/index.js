import { createStore, combineReducers, applyMiddleware } from 'redux'
import DepartmentReducer from './reducers/DepartmentReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
  combineReducers({
    departmentState: DepartmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

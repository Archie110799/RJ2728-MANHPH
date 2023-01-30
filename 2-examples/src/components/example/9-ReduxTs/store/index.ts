import { createStore, applyMiddleware, Store } from "redux";
import rootReducers from '../rootReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const store: Store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
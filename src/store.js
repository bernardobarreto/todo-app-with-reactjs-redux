import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
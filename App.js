import React from 'react';
import Login from './screens/Login';
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);
// import Root from './navigation/RootNavigator.js'



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Login />
      </Provider>
    );
  }
}
   
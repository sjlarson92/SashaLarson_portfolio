import React from 'react';
import ReactDOM from 'react-dom';
import EntryScreen from './EntryScreen'
import { Provider } from 'react-redux';
import { store } from './store/rootReducer'

ReactDOM.render(
  <Provider store={store}>
    <EntryScreen />
  </Provider>,
  document.getElementById('root')
);

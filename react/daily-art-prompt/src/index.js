import React from 'react';
import ReactDOM from 'react-dom';
import DailyArtPromptApp from './DailyArtPromptApp';
import { Provider } from 'react-redux';
import { store } from './store/rootReducer'

ReactDOM.render(
  <Provider store={store}>
    <DailyArtPromptApp />
  </Provider>,
  document.getElementById('root')
);

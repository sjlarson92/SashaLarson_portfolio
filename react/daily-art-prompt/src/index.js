import React from 'react';
import ReactDOM from 'react-dom';
import DailyArtPromptApp from './DailyArtPromptApp';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { promptsImages, prompts } from './data.js'

const rootReducer = combineReducers({
  promptsImages: () => promptsImages,
  prompts: () => prompts
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <DailyArtPromptApp />
  </Provider>,
  document.getElementById('root')
);

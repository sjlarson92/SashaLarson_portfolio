import React from 'react';
import ReactDOM from 'react-dom';
import DailyArtPromptApp from './DailyArtPromptApp';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { promptsImages } from './data.js'

const rootReducer = combineReducers({
  promptsImages: () => promptsImages,
  sasha: () => 'hello',
  lucas: () => [1, 2, 3],
  neo: () => ({
    job: 'The One',
    skill: 'badass'
  })
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <DailyArtPromptApp />
  </Provider>,
  document.getElementById('root')
);

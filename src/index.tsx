import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core';
import {
  applyMiddleware,
  createStore
} from '@reduxjs/toolkit';

import { WT } from './components/weather/WT';
import { reducer } from './reducer';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
});

const preloadStore = {
};

const store = createStore(
  reducer,
  preloadStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
<Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WT} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
</Provider>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

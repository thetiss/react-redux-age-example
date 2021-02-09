import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureState, { configureDogState } from "./store/store";

// only Age++ need this
// import reducer from "./store/reducer";
// only Age++ need this
// const store = createStore(reducer);
// just for 模板app 创建store
// const store = configureState();
const dogStore = configureDogState();
ReactDOM.render(
    <Provider store={dogStore}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
// new imports start
import { Provider } from "react-redux";
import configureStore from "./store";
// new imports stop
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
// changed the render
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
);
// changed the render
serviceWorker.unregister();

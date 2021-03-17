import Helmet from "react-helmet";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import AllReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  AllReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <title>Kulina Preliminary Test</title>
      <meta name="description" content="Kulina Preliminary Test" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        sizes="192x192"
        href="https://static.wixstatic.com/media/57689e_2191a6bd96d740f59f0d8cab1c35b33c%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/57689e_2191a6bd96d740f59f0d8cab1c35b33c%7Emv2.png"
      />
    </Helmet>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./router/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import state from "./redux/state.js";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore(state);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

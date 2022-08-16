import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./redux/configStore/Store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Store from "./redux/configStore/Store";
import { Provider } from "react-redux";
import '@fortawesome/free-solid-svg-icons'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

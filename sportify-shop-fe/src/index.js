import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

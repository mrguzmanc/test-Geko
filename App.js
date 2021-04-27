import React from "react";
import { Provider } from "react-redux";
import Navigation from "./src/router/router";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>);
}



import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//render the app only in the browser - 
// returns nothing if called on the server side
if (typeof document !== "undefined") {
  hydrate(
    <Router>
      <App />
    </Router>,
    document.getElementById("app")
  );
}

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import configureStore from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import { Box } from "@material-ui/core";

function App() {


  let store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Profile } from "../src/pages/Profile";
import { Settings } from "../src/pages/Settings";
import { NavStyled, UlStyled } from "./App.styles";

export default function App() {
  return (
    <Router>
      <div>
        <NavStyled>
          <UlStyled>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </UlStyled>
        </NavStyled>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

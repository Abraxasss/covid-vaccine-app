import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home'
import DosesScreen from './screens/DosesScreen'
import Navbar from './components/Navbar'
import './styles/MainStyles.css'
import Providers from './context/Providers'

export default function App() {
  return (
    <Providers>
      <Router>
          <Navbar />
          <Switch>

            <Route  path="/screens/DosesScreen.js">
              <DosesScreen />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
      </Router>
    </Providers>

  );
}

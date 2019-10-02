import React from 'react';
import Header from './components/Header/Header';
import SelectPlayers from './pages/SelectPlayers/SelectPlayers';
import Popular from './pages/Popular/Popular'
import Battle from './pages/Battle/Battle'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className={'flex flex-column'}>
              <Header />

              <Switch>
                  <Route exact path={'/'} component={Popular}/>
                  <Route exact path={'/battle/select-player'} component={SelectPlayers} />
                  <Route exact path={'/results?playerOne=:playerOne&playerTwo=:playerTwo'} component={Battle} />
              </Switch>

          </div>

      </Router>
  );
}

export default App;

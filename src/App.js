import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home.js'
import Menu from './components/Menu.js'


function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" render={(routerProps) => <Home routerProps={routerProps}/>}/>
        <Menu />
      </Switch>
    </div>
  );
}

export default App;

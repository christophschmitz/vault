import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Password from './Pages/Password/Password';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/password/:service">
          <Password />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

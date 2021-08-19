import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Vault">
          <p>this my vault</p>
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

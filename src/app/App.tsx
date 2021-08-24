import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Password from './Pages/Password/Password';
import Add from './Pages/Add/Add';
import Search from './Pages/Search/Search';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/services"></Route>
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

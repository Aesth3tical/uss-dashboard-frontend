import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {
  DashboardPage,
  HomePage,
  LandingPage,
  DashboardNotFound,
  AdminPage,
  AdminInvites,
  MEDPage,
  ItemManagement
} from './pages'

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/home" exact={true} component={HomePage} />
      <Route path="/dashboard/:id" exact={true} component={DashboardPage} />
      <Route path="/dashboard" exact={true} component={DashboardNotFound} />
      <Route path="/home/admin" exact={true} component={AdminPage} />
      <Route path="/home/admin/invites" exact={true} component={AdminInvites} />
      <Route path="/home/med" exact={true} component={MEDPage}/>
      <Route path="/home/med/item-management" exact={true} component={ItemManagement}/>
    </Switch>
  )
}

export default App;

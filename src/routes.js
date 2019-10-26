import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './services/RouteSecurity';
import Main from './components/Main';
import Chat from './components/Chat';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
}

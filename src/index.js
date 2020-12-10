import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/not-found'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/:orderNumber">
        <App />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

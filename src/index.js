import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Electronics from './components/Electronics.jsx';
import Appliances from './components/Appliances.jsx';
import Men from './components/Men.jsx';
import Women from './components/Women.jsx';
import Book from './components/Book.jsx';
import Furniture from './components/Furniture.jsx';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/home" component={App}>
      <IndexRoute component={Home} />
      <Route path="/electronics" component={Electronics} />
      <Route path="/appliances" component={Appliances} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/book" component={Book} />
      <Route path="/furniture" component={Furniture} />
    </Route>
  </Router>,
  document.getElementById('root')
);


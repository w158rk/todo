import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Home from './Home';
import Schedule from './Schedule';


class App extends Component {
  render() {
    return (
      <div className='container' >
        <div className="container navbar navbar-info">
          <ul>
            <li ><Link to="/schedule" activeClassName="active">Schedule</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}


render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="schedule" component={Schedule} />
    </Route>
  </Router>
), document.getElementById('root'));

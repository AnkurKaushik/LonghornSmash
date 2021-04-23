import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import {AboutUs} from './pages/AboutUs';
import PR from './pages/PR';
import {NoMatch} from './pages/NoMatch';
import NavigationBar from './components/NavigationBar';
import {Officers} from './pages/Officers'
import Schedule from './pages/Schedule'

class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar/>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/aboutus" exact component={AboutUs}/>
            <Route path="/officers" exact component={Officers}/>
            <Route path="/pr" exact component={PR}/>
            <Route path="/tournaments" exact component={Schedule}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

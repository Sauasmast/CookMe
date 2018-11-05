import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/aboutus';
import CookmeMain from './components/cookmemain';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
      <Navbar />
      <Switch>
      <Route exact path="/" component={CookmeMain} />
      <Route path="/about" component={About} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

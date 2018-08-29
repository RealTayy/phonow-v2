import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Info } from './pages/Info';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    isHome: false
  }

  setIsHome = (isHome) => {
    this.setState({ isHome: isHome });
  }

  render() {
    const isHome = this.state.isHome;
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <div className="background-image"></div>
        <header>
          <Navbar isHome={isHome} />
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home setIsHome={this.setIsHome} />} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer isHome={isHome} />
        </footer>
      </div>
    </Router >
  }
};

export default App;

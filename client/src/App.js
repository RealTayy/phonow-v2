import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup, } from 'react-transition-group';
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
    return <Router forceRefresh={!('pushState' in window.history)}>
      <div>
        <div className="background-image"></div>
        <header>
          <Navbar isHome={isHome} setIsHome={this.setIsHome} />
        </header>
        <main>
          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup>
                  <Transition
                    key={pathname}
                    timeout={{
                      enter: 1000,
                      exit: 1000,
                    }}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route
                            exact path="/"
                            render={() => (
                              <Home
                                setIsHome={this.setIsHome}
                              />
                            )}
                          />
                          <Route
                            exact path="/menu"
                            render={() => (
                              <Menu
                                setIsHome={this.setIsHome}
                              />
                            )}
                          />
                          <Route
                            exact path="/info"
                            render={() => (
                              <Info
                                setIsHome={this.setIsHome}
                              />
                            )}
                          />
                          <Route
                            exact path="/about"
                            render={() => (
                              <About
                                setIsHome={this.setIsHome}
                              />
                            )}
                          />
                          <Route
                            exact path="/contact"
                            render={() => (
                              <Contact
                                setIsHome={this.setIsHome}
                              />
                            )}
                          />
                          <Route
                            render={() => (<Home />)}
                          />
                        </Switch>
                      )}
                    />
                  </Transition>
                </TransitionGroup>
              );
            }}
          />
        </main>
        <footer>
          <Footer isHome={isHome} />
        </footer>
      </div>
    </Router >
  }
};

export default App;

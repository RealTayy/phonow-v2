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
import API from './utils/API.js';
import './App.css';
import { MenuNav } from './components/MenuNav';

class App extends Component {
  state = {
    isHome: false,
    categories: [],
    menu: [],
  }

  componentDidMount = () => {
    API.getCategories()
      .then(categories => this.setState({ categories: categories }))
      .catch(err => console.log(err));
    API.getMenu()
      .then(menu => this.setState({ menu: menu }))
      .catch(err => console.log(err))
  }


  setIsHome = (isHome) => {
    this.setState({ isHome: isHome });
  }


  render() {
    const isHome = this.state.isHome;
    return <Router forceRefresh={!('pushState' in window.history)}>
      <div className="_App f-raleway">
        <header>
          <Navbar isHome={isHome} setIsHome={this.setIsHome} categories={this.state.categories} />
          <Route exact path="/menu/:category" render={() => (
            <MenuNav categories={this.state.categories} />
          )} />
        </header>
        <main>
          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup className="page-container">
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
                            exact path="/menu/:category"
                            render={(props) => {
                              return (
                                <Menu
                                  setIsHome={this.setIsHome}
                                  menu={this.state.menu}
                                  categories={this.state.categories}
                                  category={props.match.params.category}
                                />
                              )
                            }}
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
                            render={() => (<Home
                              setIsHome={this.setIsHome}
                            />)}
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

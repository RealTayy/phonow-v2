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
    isMenu: /\^.menu/g.test(window.location.pathname),
    categories: [],
    menu: [],
    activeTab: '',
    activeCategory: ''
  };

  componentDidMount = () => {
    Promise.all([
      API.getCategories()
        .then(categories => categories),
      API.getMenu()
        .then(menu => menu)
    ])
      .then((value) => {
        const categories = value[0];
        const menu = value[1];
        this.formatMenu(menu, categories)
        this.setState({
          categories: value[0],
          menu: value[1]
        })
      })
      .catch((err) => console.log(err));
  };

  setIsHome = (isHome) => {
    this.setState({ isHome: isHome });
  };

  setIsMenu = (isMenu) => {
    this.setState({ isMenu: isMenu });
  };

  setActiveTab = (activeTab) => {
    const isHome = (activeTab === '/');
    const isMenu = /^.menu/g.test(activeTab);
    this.setState({
      activeTab: activeTab,
      isHome: isHome,
      isMenu: isMenu,
    })
  };

  setActiveCategory = (category) => {
    this.setState({
      activeCategory: category
    });
  }

  formatMenu = (menu, categories) => {
    // Iterate through menu and push items into correct categories
    menu.forEach(item => {
      let indexOfCategory = categories.findIndex((ele) => {
        return (ele.id === item.category);
      })
      categories[indexOfCategory].items.push(item);
    });

    return categories;
  }


  render() {
    const isHome = this.state.isHome;
    return <Router forceRefresh={!('pushState' in window.history)}>
      <div className="_App f-raleway">
        <header>
          <Navbar
            isHome={isHome}
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
            categories={this.state.categories}
            setActiveCategory={this.setActiveCategory}
          />
          <MenuNav
            isMenu={this.state.isMenu}
            activeTab={this.state.activeTab}
            categories={this.state.categories}
            setActiveCategory={this.setActiveCategory}
          />
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
                      enter: 750,
                      exit: 750,
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
                                setActiveTab={this.setActiveTab}
                              />
                            )}
                          />
                          <Route
                            exact path="/menu"
                            render={(props) => {
                              return (
                                <Menu
                                  setActiveTab={this.setActiveTab}
                                  menu={this.state.menu}
                                  categories={this.state.categories}
                                  category={this.state.activeCategory}
                                />
                              )
                            }}
                          />
                          <Route
                            exact path="/info"
                            render={() => (
                              <Info
                                setActiveTab={this.setActiveTab}
                              />
                            )}
                          />
                          <Route
                            exact path="/about"
                            render={() => (
                              <About
                                setActiveTab={this.setActiveTab}
                              />
                            )}
                          />
                          <Route
                            exact path="/contact"
                            render={() => (
                              <Contact
                                setActiveTab={this.setActiveTab}
                              />
                            )}
                          />
                          <Route
                            render={() => (<Home
                              setActiveTab={this.setActiveTab}
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

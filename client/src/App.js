import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Info } from './pages/Info';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          {/* <Route exact path='/' component={Home} />          
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Home} /> */}
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;

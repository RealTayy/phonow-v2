import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import XPage from './pages/XPage';
import XPageTwo from './pages/XPageTwo'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="body">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={XPage} />
          <Route exact path='/XPageTwo' component={XPageTwo} />          
          <Route component={XPage} />
        </Switch>
      </main>
      <footer class="page-footer">
        <Footer />>
      </footer>
    </div>
  </Router>
);

export default App;

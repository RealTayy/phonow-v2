import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import XPage from './pages/XPage';
import XPageTwo from './pages/XPageTwo'
import XCollection from './pages/XCollection'
import XNoMatch from './pages/XNoMatch';
import { Navbar } from './components/Navbar';

const App = () => (
  <Router>
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={XPage} />
          <Route exact path='/XPageTwo' component={XPageTwo} />
          <Route exact path='/XCollection/:id' component={XCollection} />
          <Route component={XNoMatch} />
        </Switch>
      </main>
      <footer class="page-footer">

      </footer>
    </div>
  </Router>
);

export default App;

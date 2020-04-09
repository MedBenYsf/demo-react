import React from 'react';
import Contacts from './components/contacts/Contacts';
import { Provider } from './components/Context'
import Navbar from './components/navbar/Navbar';
import AddContact from './components/contacts/AddContact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/pages/About'
import PageNotFound from './components/pages/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
      <div className="App">
        <Navbar title="Contacts list" />
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route component={PageNotFound} />
        </Switch>
    </div>
      </Router>
    </Provider>
  );
}

export default App;

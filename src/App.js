import React from 'react';
import Contacts from './components/contacts/Contacts';
import { Provider } from './components/Context'
import Navbar from './components/navbar/Navbar';
import AddContact from './components/contacts/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar title="Contacts list" />
        <AddContact />
        <Contacts />
    </div>
    </Provider>
  );
}

export default App;

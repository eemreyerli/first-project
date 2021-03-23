import React, { Component } from 'react';
import Navbar from  "./components/Navbar";
import User from  "./components/User";

import './App.css';


class App extends Component {
  render() { 

    return (
      <div className="container">
        <Navbar abcd = "Kullanicilar"/>
        <hr />
        <User 
        name="Emre Yerli" 
        salary="5000" 
        department="bilisim" 
        sene="4 yillik"
        />

        <hr />
        <User 
        name="Resul Yerli" 
        salary={7000+2000}
        department="Polis" 
        sene="2 yillik"
        />
        <hr />
        <Navbar abcd = "Bitti amk"/>
      </div>
        
    ); 
  }
}

export default App;

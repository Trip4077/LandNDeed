import React from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import CardGrid from './components/CardGrid';
import AccordianGrid from './components/AccordianGrid';
import Form from './components/Form';
import About from './components/About';

import {Route} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CardGrid />
      <AccordianGrid />
      
      <Route path='/' render={props => {
        return <Form {...props} />
      }} />

      <About />
    </div>
  );
}

export default App;

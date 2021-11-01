import { useState, useEffect } from 'react';

import { Switch, Route } from 'react-router';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        SetIsOpen(false)
        console.log('I resized');
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Footer/> 
    </>
  );
}

export default App;

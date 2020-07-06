import React from 'react';
import './App.css';
import Header from './components/Header'
import { Chickens } from './components/Chicken';
import { Chick } from './components/Chick';

// import chickens data above
// below map over chickens data
// import Chick
// chicken.map(item => <Chick />)
console.log(Object.values(Chickens));

export const App = () => {

  return (
    <div className="App">
      <Header />
        {Object.keys(Chickens).map(key => <Chick key={key} {...Chickens[key]} />)}
    </div>
  );
}


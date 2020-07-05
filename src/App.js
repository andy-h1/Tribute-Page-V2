import React from 'react';
import './App.css';
import Header from './components/Header'
import { chickens } from './Chicken';
import { Chick } from './Chick';

// import chickens data above
// below map over chickens data
// import Chick
// chicken.map(item => <Chick />)
console.log(Object.values(chickens));

function App() {

  return (
    <div className="App">
      <Header />
        {Object.keys(chickens).map(key => <Chick key={key} {...chickens[key]} />)}
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';

function App() {
  const name:string = 'pedro';
  const age:number = 35;
  const isMarriad:boolean = true;
  return (
    <div className="App">
      {name}
      {' '}
      {age}
      {isMarriad}
    </div>
  );
}

export default App;

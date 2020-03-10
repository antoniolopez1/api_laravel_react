import React from 'react';
import Main from './Main'
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
const App =()=>(
  <div>
    <Router>
      <Header/>
      <Main/>
    </Router>
  </div>
);

export default App;

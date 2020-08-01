/**
 * @description 
 */

/************** Imports *************/
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';
/************************************/



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component=''/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// react library
import React from 'react';

// styles
import './App.css';

// components
import NavBar from '../NavBar'
import Content from '../Content'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Content />
    </div>
  )
}

export default App;

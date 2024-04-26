// App.js
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Forcast from './components/forcast';
function App() {
  return (
    <>
      <div className="app">
        <ToastContainer />
        <Forcast icon="icon" weather="112" />
      </div>
    </>
  );
}

export default App;

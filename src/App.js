import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Login />
      <Register />
    </div>
  );
}

export default App;

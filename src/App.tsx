import React from 'react';

import './App.scss';
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import {Dashboard} from './components/Dashboard';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Music from './pages/Music';
import Setting from './pages/Setting';
import Register from './pages/Register';
import User from './pages/User';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <div className=" main-app">
      <Dashboard/>
      <div className="main_glass">
      <Routes>
      <Route path="/Profile/:userId" element={<Profile/>}/>
      <Route path="/Chat" element={<Chat/>}/>
      <Route path="/Music" element={<Music/>}/>
      <Route path="/Setting" element={<Setting/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="/User" element={<User/>}/>
      </Routes>
        </div>
        </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;

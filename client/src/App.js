import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Dashboard from './Pages/DashBoard';
import Analytics from './Pages/Analytics';
import CreateQuiz from './Pages/CreateQuiz';
import Final from './Components/Final/Final';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Final/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path='/create' element={<CreateQuiz />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

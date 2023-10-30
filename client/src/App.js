import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Dashboard from './Pages/DashBoard';
import Analytics from './Pages/Analytics';
import CreateQuiz from './Pages/CreateQuiz';
import Login from './Components/Login/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

 let checkAuth = (value) =>  {
    setLoggedIn(value);
   }

  return (
    <BrowserRouter>
      {loggedIn && <Sidebar />}
      <Routes>
        <Route path="/" element={loggedIn ? <Dashboard /> : <Login  checkAuth={checkAuth}/>} />
        {/* <Route path="/signup" element={<SignUp/>} /> */}
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login  checkAuth={checkAuth} />} />
        <Route path="/analytics" element={loggedIn ? <Analytics /> : <Login  checkAuth={checkAuth} />} />
        <Route path="/create" element={loggedIn ? <CreateQuiz /> : <Login  checkAuth={checkAuth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

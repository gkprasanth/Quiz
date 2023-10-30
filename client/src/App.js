import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Dashboard from './Pages/DashBoard';
import Analytics from './Pages/Analytics';
import CreateQuiz from './Pages/CreateQuiz';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {loggedIn && <Sidebar />}
      <Routes>
        <Route path="/" element={loggedIn ? <Dashboard /> : <Login />} />
        {/* <Route path="/signup" element={<SignUp/>} /> */}
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path="/analytics" element={loggedIn ? <Analytics /> : <Login />} />
        <Route path="/create" element={loggedIn ? <CreateQuiz /> : <Login />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route  path='/final' element={<Final />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path='/create' element={<CreateQuiz />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

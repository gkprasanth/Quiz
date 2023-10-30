import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Dashboard from './Pages/DashBoard';
import Analytics from './Pages/Analytics';
import CreateQuiz from './Pages/CreateQuiz';
import Signup from './Components/SignUp/SignUp'
import Login from './Components/Login/Login';
const App = () => {
<<<<<<< HEAD
  // Use useState to manage the login state, set it to false initially if the user is not logged in.
  const [loggedIn, setLoggedIn] = useState(true);
=======
  const [loggedIn, setLoggedIn] = useState(true);

 let checkAuth = (value) =>  {
    setLoggedIn(value);
   }
>>>>>>> 08ed6d670400092a769900d315ab4887dcaeecd0

  return (
    <BrowserRouter>
      {/* {loggedIn && <Sidebar />} */}
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path="/signup" element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path="/login" element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path="/analytics" element={loggedIn ? <Analytics /> : <Login />} />
        <Route path="/create" element={loggedIn ? <CreateQuiz /> : <Login />} />
      </Routes>
      
=======
        <Route path="/" element={loggedIn ? <Dashboard /> : <Login  checkAuth={checkAuth}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login  checkAuth={checkAuth} />} />
        <Route path="/analytics" element={loggedIn ? <Analytics /> : <Login  checkAuth={checkAuth} />} />
        <Route path="/create" element={loggedIn ? <CreateQuiz /> : <Login  checkAuth={checkAuth} />} />
      </Routes>
>>>>>>> 08ed6d670400092a769900d315ab4887dcaeecd0
    </BrowserRouter>
  );
};

export default App;

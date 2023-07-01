import React from "react";
import Home from "./pages/Home/Home";
import './App.css';
import Learning from './pages/Learning/Learning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCourses from './studentComponents/viewCourses';
import Login from './studentComponents/login';

import Display from "./pages/displayData/display";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path="/learning" element={<Learning />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<Display/>} />
      </Routes>
    </Router>
  );
}

export default App;

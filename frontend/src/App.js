import React from "react";
import Home from "./pages/Home/Home";
import './App.css';
import Learning from './pages/Learning/Learning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;

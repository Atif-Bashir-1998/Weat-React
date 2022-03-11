import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Error from "./views/Error";
import './index.css';

import Home from './views/Home'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

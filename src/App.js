import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Error from "./views/Error";
import './index.css';

import About from './views/About'
import Index from "./views/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

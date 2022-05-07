import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Error from "./views/Error";
import './index.css';

import Home from './views/Home'
import Index from "./views/Index";
import Forecast from "./views/Forecast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

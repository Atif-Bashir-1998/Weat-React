import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Error from "./views/Error";

import Home from './views/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";

import Navbar from "./components/Navbar/Navbar";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import StudentList from "./pages/StudentList";
import CardDetails from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/:id" element={<CardDetails />} />

        {/* <Route path="/episodes" element={<Episodes />} /> */}
        {/* <Route path="/episodes/:id" element={<CardDetails />} /> */}

        {/* <Route path="/location" element={<Location />} /> */}
        {/* <Route path="/location/:id" element={<CardDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
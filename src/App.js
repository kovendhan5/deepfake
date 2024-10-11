// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FaceScan from "./components/FaceScan";
import Login from "./components/login";
import SignUp from "./components/Signup";
import VideoUpload from "./components/VideoUpload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/facescan" element={<FaceScan />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
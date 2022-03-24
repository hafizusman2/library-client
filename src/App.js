import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import IndexScreen from "./screens/IndexScreen";
import StudentsListScreen from "./screens/StudentsListScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen />} exact />
          <Route path="viewstudents" element={<StudentsListScreen />} exact />

          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

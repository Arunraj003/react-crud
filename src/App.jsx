import { React } from "react";
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
// import Delete from "./Delete";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />} ></Route>
        <Route path="/edit/:id" element={<Update />} ></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
